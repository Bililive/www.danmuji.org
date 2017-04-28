---
# hide: true
# 取消隐藏请注释hide
title: TTSDanmaku
auther: Elepover
plugin_author: Elepover
plugin_name: TTSDanmaku
plugin_desc: 使用 TTS 读出收到的弹幕和礼物！
plugin_version: 1.0.1.24
#plugin_update: 2017.04.22
plugin_update_datetime: 2017-04-22 23:20:00 +0800
#plugin_update_desc: |-
#  当次更新介绍写这里，可选
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
* 如遇到提示 NAudio 丢失之类的错误，请参考页面底部下载。

如需执行以下操作：

 - 修改设置
 - 清理缓存

请直接在弹幕姬中右键 TTSDanmaku 插件项，选择 **管理** 即可。

更新日志
----

```
[i] 各前缀说明:
    [i] = 提示
    [!] = 注意
    [+] = 新增
    [/] = 修改

[!] 部分涉及到设置系统变更的版本更新，
    将会重置配置，请在更新后重新设置。
[i] 楼上的问题将在后期版本中解决。

[i] 新版开发进度:

v1.0.2, build 32 ->
[+] 根据代码分析做了一定优化。
    Code Analysis Complete -- 0 error(s), 0 warning(s)
[-] 根据 VS 三千瓦电灯泡去掉了多余的 Imports.
    当前全局 Imports:
    Microsoft.VisualBasic
    System
    System.Collections
    System.Collections.Generic
    System.Data
    System.Diagnostics
    System.Linq
    System.Xml.Linq
[-] 去掉了在插件文件夹内释放的多余的一个 NAudio.
[+] 在 Including 中新增了两个暂时没啥用的轮子 ->
    GetHttpStatusCode ->
        向钦定的 URL 发送钦定的请求，获取返回的状（真）态（他）码（妈）。
    GetIP ->
        通过官方钦定 Elepover's APIs 获取 IP。
    NetworkWatchdog ->
        监测网络连接状态。
[+] 新增统计系统。（喂明明写了一大堆代码才这么一句话真的好吗
[/] 于是我又把调试信息改成了统计数据（捂脸逃

v1.0.2, build 30 ->
[+] 设置窗口中所有选项及按钮均对应新增了 ToolTip.
[+] 自动缓存清理选项现已默认启用。
[/] 更新弹幕姬中所显示插件信息。
[i] NoBlockMsgBox 即将作为一个新的 repo 开发。

v1.0.2, build 27 ->
[+] 新增 TTS 冷却选项。
[+] 使用新线程打开管理窗口，取代弹幕姬主进程。
[/] 改善设置系统。
[/] 解决部分代码阻塞弹幕姬主进程的问题。
[!] 此版本未经系统性调试，如有问题请及时反馈。

v1.0.2, build 25 ->
[+] 提高一个版本号（雾
[+] 在部分代码块新增了大批注释。
[i] TTSDanmaku 即将开源。


v1.0.1, build 24 -> 最后发行版本
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

注意事项
----

- TTSDanmaku 不适合出现**大量弹幕**的场合下使用。
- 下载稳定性取决于网络。
- 大量弹幕同时出现，可能会导致 TTS 夹杂混乱。
- 根据有的用户反馈，NAudio 有概率释放失败，正在寻找原因，请先在[这里](https://www.danmuji.cn/resource/TTSDanmaku/NAudio.dll)下载。
