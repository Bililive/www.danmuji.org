---
# hide: true
# 取消隐藏请注释hide
title: TTSDanmaku
auther: Elepover
plugin_author: Elepover
plugin_name: TTSDanmaku
plugin_desc: 使用 TTS 读出收到的弹幕和礼物！
plugin_version: 1.0.4.53
#plugin_update: 2017.06.07
plugin_update_datetime: 2017-07-31 16:48:00 +0800
#plugin_update_desc: |-
#  当次更新介绍写这里，可选
plugin_dllink: /resource/TTSDanmaku/TTSDanmaku.zip
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---
最新版编译状态:

[![Build status](https://ci.appveyor.com/api/projects/status/o3wb9g7am3h4peny?svg=true)](https://ci.appveyor.com/project/Elepover/plugin-ttsdanmaku)

有问题或是有建议可以 [在作者的 Blog](https://blog.elepover.com/quoteLeft.html) 通过评论提交。

[在此感谢](https://github.com/Elepover/Plugin-TTSDanmaku/blob/master/THANKS.md)每一位为此插件做出贡献的用户。

安装方法
----

下载并解压缩得到 `TTSDanmaku.dll`

 1. 将 `TTSDanmaku.dll` 复制到 `%USERPROFILE%\Documents\弹幕姬\Plugins`
 2. 打开/重启弹幕姬 -> 插件 -> 右键 **TTSDanmaku** -> 启用插件
 
    btw: %USERPROFILE%\Documents 即 我的文档，上方路径可直接复制到资源管理器路径栏中。

日常使用
----

使用截图:

![使用截图](https://www.danmuji.cn/resource/TTSDanmaku/screenshot.png)

首次启动 TTSDanmaku 将会自动释放 NAudio.dll 到插件目录中以正常播放 MP3 文件，请不要删除。
* 如遇到提示 NAudio 丢失之类的错误，请参考页面底部下载。
正确的 NAudio 放置位置:

![正确的文件放置](https://www.danmuji.cn/resource/TTSDanmaku/fileplace.png)

如需执行以下操作：

 - 修改设置
 - 清理缓存

请直接在弹幕姬中右键 TTSDanmaku 插件项，选择 **管理** 即可。

更新日志
----

稳定版本（弹幕姬插件仓库版本）: **v1.0.4.53**

最新版本: [**v1.0.4.53**](https://ttsdanmaku.elepover.com)

详细更新日志，请前往 [GitHub Repo](https://github.com/Elepover/Plugin-TTSDanmaku#更新日志) 查看。

注意事项
----

- TTSDanmaku 不适合出现**大量弹幕**的场合下使用。或是在 build 27+ 的版本中启用**弹幕冷却**选项。
- 插件涉及到配置文件变动的更新或配置文件出错，请手动删除配置文件。
- 下载稳定性取决于网络。
- 大量弹幕同时出现，可能会导致 TTS 夹杂混乱。
- 自定义 弹幕 / 礼物 读出内容中的变量 **大小写敏感**。
- 根据有的用户反馈，NAudio 有概率释放失败，正在寻找原因，请先在[这里](https://www.danmuji.cn/resource/TTSDanmaku/NAudio.dll)下载。

自定义弹幕 / 礼物读出内容格式
----------------

参见 [TTSDanmaku Wiki](https://github.com/Elepover/Plugin-TTSDanmaku/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E5%B9%95---%E7%A4%BC%E7%89%A9%E5%86%85%E5%AE%B9%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E)

历史下载
----

**如果新版 TTSDanmaku 工作异常**，请在此下载旧版。

[TTSDanmaku v1.0.1.24](https://www.danmuji.cn/resource/TTSDanmaku/ver10124/TTSDanmaku.zip)

TTSDanmaku 将在作者的下载服务器实时更新，如需体验新版，请[ >在此< ](https://ttsdanmaku.elepover.com)下载。

关于 NAudio 丢失问题
-------------

如果遇到了这种错误:

```
System.IO.FileNotFoundException: 未能加载文件或程序集“NAudio, Version=1.8.0.0, Culture=neutral, PublicKeyToken=null”或它的某一个依赖项。系统找不到指定的文件。
文件名:“NAudio, Version=1.8.0.0, Culture=neutral, PublicKeyToken=null”
```

请在上方注意事项中下载 NAudio，并与 TTSDanmaku 主插件置于一起，重新启用插件即可。
TTSDanmaku 1.0.3+ 中将部分避免此问题发生。
