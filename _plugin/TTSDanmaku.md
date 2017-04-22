---
hide: true
# 取消隐藏请注释hide
title: TTSDanmaku
auther: Elepover
plugin_author: Elepover
plugin_name: TTSDanmaku
plugin_desc: 使用 TTS 读出收到的弹幕和礼物！
plugin_version: 1.0.1.24
plugin_update: 2017.04.22
plugin_dllink: /resource/TTSDanmaku/TTSDanmaku.zip
plugin_dlnote: 只在弹幕姬网站上上传，请勿搬运。
---


有问题或是有建议可以 [在作者的 Blog](https://blog.elepover.com/quoteLeft.html) 通过评论提交。

安装方法
----

下载并解压缩得到 `TTSDanmaku.dll`

 1. 将 `TTSDanmaku.dll` 复制到 `%USERPROFILE%\Documents\弹幕姬\Plugins`
 2. 打开/重启弹幕姬 -> 插件 -> 右键 **TTSDanmaku** -> 启用插件
 
    btw: %USERPROFILE%\Documents 即 我的文档，上方路径可直接复制到资源管理器路径栏中。

日常使用
----

首次启动 TTSDanmaku 将会自动释放 NAudio.dll 到插件目录中以正常播放 MP3 文件，请不要删除。

如需执行以下操作：

 - 修改设置
 - 清理缓存

请直接在弹幕姬中右键 TTSDanmaku 插件项，选择 **管理** 即可。

更新日志
----

```
v1.0.1, build 24
[+] 尴尬...忘了写关于部分的链接代码了...我还是升级一个 build 吧。

v1.0.1, build 23
[+] 自动清理缓存功能目前已经工作，默认停用。
[+] 手动清理缓存时添加文件占用警告。
[+] 网络问题导致的 TTS 下载失败，默认重试 5 次。
[+] 新增 关于 TTSDanmaku 选项。
[/] 降低启用时对弹幕姬主线程的阻塞。
[/] 改进调试模式输出。
[/] 修改弹幕姬中所显示版本号格式为 主版本.主版本(2).当前版本.编译次数

v1.0.1, build 21
[+] 修复一个导致弹幕姬崩溃的问题。

v1.0.1, build 19
[/] 重写旧版 TTSDanmaku
```
