---
# hide: true
title: 本地网易云喵块
auther: 起名废丶西井
plugin_author: 起名废丶西井
plugin_name: 本地网易云喵块
plugin_desc: 可以添加歌单和登录以享受高品质音乐喵
plugin_version: 1.0.7
plugin_update_datetime: 2019-06-09 22:00:00 +0800
plugin_update_desc: |-
  解决无法显示歌词的问题。
plugin_dllink: /resource/ExtendNetease_DGJModule/ExtendNetease_DGJModule.zip
plugin_dlnote: 只在弹幕姬官网提供下载,请勿转载
---

若插件有任何问题，亦或对插件有建议，请至任何一个弹幕姬群里私聊我(847529602)

# **请务必仔细阅读使用说明喵！！！**
**※本插件依赖点歌姬插件※**

插件界面
---
<img class="shadow" src="https://www.danmuji.cn/resource/ExtendNetease_DGJModule/preview.png" alt="插件界面"/>
<img class="shadow" src="https://www.danmuji.cn/resource/ExtendNetease_DGJModule/preview2.png"/>

插件源代码
---
[点此跳转](https://github.com/Executor-Cheng/ExtendNetease_DGJModule)

插件功能
---
- 不再请求lwl12的api，改为本地发送请求，减轻api的压力
- 允许用户添加空闲歌单
- 允许用户登录网易云账号。若账号拥有音乐包/会员，点歌品质最高可至320Kbps

安装方法
---
下载压缩包后，解压进 `我的文档\弹幕姬\plugins\` 重启弹幕姬即可。

使用说明
---

第一次运行时会创建目录 `我的文档\弹幕姬\plugins\Assembly\` : 存放必要的动态链接库供插件调用

`我的文档\弹幕姬\plugins\ExtendNetease\` : 内有配置文件，以记录用户网易云登录状态和默认下载品质，**所以请不要将配置文件给予他人喵！**

本插件所有功能开关均在管理页面中，移步至 **插件** 选项卡并右键本插件，点击 **管理** 即可。

也不要忘了在点歌姬主界面内把“本地网易云喵块”选入首/备选模块之一喵

右键登录按钮可以注销网易云账号

更新日志
---
- 2019-06-09 22:00:00 解决无法显示歌词的问题。
- 2019-06-08 21:11:18 解决了某些电脑ManagedOpenSSL初始化失败的问题（原理：改用BouncyCastle进行RSA_NoPadding加密）。
- 2019-05-15 16:40:57 解决了网易云返回文件类型大小写不同导致插件无法正确辨识mp3文件的问题。
- 2019-05-11 23:19:25 将所有的整型属性转为长整形以避免数值过大产生异常。当插件试图下载非mp3格式的单曲时，将终止操作（由于点歌姬不支持非mp3格式播放）。添加了下载链接缓存。
- 2019-05-09 20:05:35 移除了忘了删掉的调试输出。解决了用户为会员时无法点某些版权单曲的问题。
- 2019-05-07 21:28:04 解决了点歌品质无法应用到点歌上的问题。解决了插件无法输出日志的问题。
- 2019-05-06 00:45:23 解决了没有安装登录中心时，插件无法正常加载的问题
- 2019-05-05 22:44:36 发布初版
