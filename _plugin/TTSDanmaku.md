---
# hide: true
# 取消隐藏请注释hide
title: TTSDanmaku
auther: Elepover
plugin_author: Elepover
plugin_name: TTSDanmaku
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 1.0.4.55
#plugin_update: 2017.08.24
plugin_update_datetime: 2017-09-17 12:40:00 +0800
plugin_update_desc: |-
  [+] 重构更新检查功能，改为新的更新检查窗口。
  [+] 最小弹幕字数限制。
  [+] 加入插件托盘图标。
  [-] 移除自动 NAudio 释放。请在安装插件时一同复制 NAudio。
  [+] 新增自动更新检查。
  [+] 优化内部通信结构。
#  当次更新介绍写这里，可选
plugin_dllink: /resource/TTSDanmaku/TTSDanmaku.zip
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---
最新版编译状态:

[![Build status](https://ci.appveyor.com/api/projects/status/o3wb9g7am3h4peny?svg=true)](https://ci.appveyor.com/project/Elepover/plugin-ttsdanmaku)

有问题或是有建议可以 [在作者的 Blog](https://blog.elepover.com/quoteLeft.html) 通过评论提交。

[在此感谢](https://github.com/Elepover/Plugin-TTSDanmaku/blob/master/CONTRIBUTING.md)每一位为此插件做出贡献的用户。

安装方法
----

下载并解压缩得到 `TTSDanmaku.dll` 以及 `NAudio.dll`

 1. 将 **`TTSDanmaku.dll` 和 `NAudio.dll`** 复制到 `%USERPROFILE%\Documents\弹幕姬\Plugins`
 2. 打开/重启弹幕姬 -> 插件 -> 右键 **TTSDanmaku** -> 启用插件
 
 btw: %USERPROFILE%\Documents 即 我的文档，上方路径可直接复制到资源管理器路径栏中。

 比弹幕姬插件仓库中更新的插件可在页面下方找到。

 **请保证 NAudio.dll 和 TTSDanmaku.dll 处于同一文件夹，否则无法使用插件！**

日常使用
----

使用截图:

![使用截图](https://www.danmuji.cn/resource/TTSDanmaku/screenshot.png)

**请保证按以下方式放置文件：**

![正确的文件放置](https://www.danmuji.cn/resource/TTSDanmaku/fileplace.png)

请直接在弹幕姬中右键 TTSDanmaku 插件项，选择 **管理** 即可。

更新日志
----

稳定版本（弹幕姬插件仓库版本）: **v1.0.4.55**

详细更新日志，请前往 [GitHub Repo](https://github.com/Elepover/Plugin-TTSDanmaku#更新日志) 查看。

注意事项
----

- **在 v1.0.4.53+ 的版本，请在启动插件之前将 NAudio.dll 和 TTSDanmaku 本体放在一起，否则无法启动插件。**
- 插件涉及到配置文件变动的更新或配置文件出错，请手动删除配置文件。
- 下载稳定性取决于网络。
- 自定义 弹幕 / 礼物 读出内容中的变量 **大小写敏感**。

自定义弹幕 / 礼物读出内容格式
----------------

参见 [TTSDanmaku Wiki](https://github.com/Elepover/Plugin-TTSDanmaku/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E5%B9%95---%E7%A4%BC%E7%89%A9%E5%86%85%E5%AE%B9%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E)

更多下载
----

#### TTSDanmaku Beta

没有推送到弹幕姬插件仓库的版本，功能比弹幕姬插件仓库中插件更多，可能有稳定性问题。

请[ >在此< ](https://ttsdanmaku.elepover.com)下载。

#### TTSDanmaku Live

更新比 Beta 版本更加激进，可第一时间体验新功能，但可能有比 Beta 版更多的稳定性问题。

（甚至有些功能完全无法工作都是有可能的（逃

在 [AppVeyor](https://ci.appveyor.com/project/Elepover/plugin-ttsdanmaku/build/artifacts) 提供下载。

关于 NAudio 丢失问题
-------------

如果遇到了这种错误:

```
System.IO.FileNotFoundException: 未能加载文件或程序集“NAudio, Version=1.8.0.0, Culture=neutral, PublicKeyToken=null”或它的某一个依赖项。系统找不到指定的文件。
文件名:“NAudio, Version=1.8.0.0, Culture=neutral, PublicKeyToken=null”
```
或者是
```
System.TypeInitializationException: “TTSDanmaku.Includings”的类型初始化设定值引发异常。。。
```

请保证 NAudio.dll 和 TTSDanmaku 主插件置于一起，重新启用插件即可。