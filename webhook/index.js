#!/usr/bin/env node

const hook = require('githubhook'),
    child_process = require('child_process'),
    fs = require('fs'),
    path = require("path"),
    minify = require('html-minifier').minify,
    cleancss = new(require('clean-css'))({
        level: 2
    });

const options = {
    hook: {
        port: 12451,
        secret: "[SECRET]"
    },
    execSync_options: {
        cwd: "/opt/www/Bililive_dm_Website/",
    },
    build: "build",
    refresh: "cdn",
    buildoptions: {
        src: "/opt/www/Bililive_dm_Website/",
        dist: "/opt/www/output/"
    },
    minify_options: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
    }
};

// process.on('uncaughtException', err => dolog('Caught exception: ' + err));

var push = function (data) {
    dolog("开始操作");

    child_process.execSync("sudo git clean -fdx", options.execSync_options);

    dolog(child_process.execSync("sudo git fetch --all", options.execSync_options));

    dolog(child_process.execSync("sudo git reset --hard origin/master", options.execSync_options));

    if (new RegExp(options.build).test(data.head_commit.message)) {
        var build_cmd = "sudo bundle exec jekyll build --source " + options.buildoptions.src + " --destination " + options.buildoptions.dist;
        dolog(child_process.execSync(build_cmd, options.execSync_options));

        // 压缩代码文件
        readFileList(options.buildoptions.dist).filter(w => w.endsWith('.html'))
            .forEach(file =>
                fs.writeFileSync(file,
                    minify(fs.readFileSync(file, {
                        encoding: "utf8"
                    }), options.minify_options)
                )
            );

        readFileList(options.buildoptions.dist).filter(w => w.endsWith('.css'))
            .forEach(file =>
                fs.writeFileSync(file,
                    cleancss.minify(fs.readFileSync(file, {
                        encoding: "utf8"
                    })).styles
                )
            );

        dolog("代码文件压缩完毕\n");
    } else {
        dolog("不需要 Build\n");
    }

    if (new RegExp(options.refresh).test(data.head_commit.message)) {
        var refresh_cmd = "qcloudcli cdn RefreshCdnDir --dirs '[\"https://www.danmuji.org/\",\"http://www.danmuji.org/\"]'";
        dolog(child_process.execSync(refresh_cmd, options.execSync_options));
    } else {
        dolog("不需要 RefreshCDN\n");
    }

    dolog("操作结束\n");
}

const readFileList = (dir) =>
    fs.readdirSync(dir).reduce((files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory() ?
        files.concat(readFileList(path.join(dir, file))) :
        files.concat(path.join(dir, file)), []);

function dolog(text) {
    var logdate = new Date();
    var logfile = "/opt/www/log/" + logdate.getFullYear() + "-" + ('0' + (logdate.getMonth() + 1)).slice(-2) + "-" + ('0' + logdate.getDate()).slice(-2) + ".log";
    fs.appendFileSync(logfile, "[" + logdate.getFullYear() + "-" + (logdate.getMonth() + 1) + "-" + logdate.getDate() +
        " " + logdate.getHours() + ":" + logdate.getMinutes() + ":" + logdate.getMinutes() + "] - " + text);
}

var github = hook(options.hook);
github.listen();
github.on('push:Bililive_dm_Website:refs/heads/master', function (data) {
    process.nextTick(function () {
        push(data)
    })
});