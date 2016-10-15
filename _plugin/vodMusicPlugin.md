---
title: 点歌姬
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 点歌姬
plugin_desc: 用弹幕来播放歌曲吧
plugin_version: 1.2.0
plugin_update: 2016.09.18
plugin_dllink: https://www.danmuji.cn/wp-content/uploads/2016/10/点歌姬1.2.zip
#plugin_dlnote: 
---
# 欢迎使用点歌姬!
视频教程:<br/>
[弹幕机的使用教程](http://www.bilibili.com/video/av6525329/)<br/>
[点歌姬的使用教程](http://www.bilibili.com/video/av6465937/)<br/>
注：这个说明中的所有“弹幕点歌”是指旧的插件，“点歌姬”指这个新的插件

压缩包里一共三个文件，文件列表：

!用前必看简单说明.txt - 本说明文件
DMPlugin_DGJ.dll - 点歌姬插件本体
LWLAPI.gem - 点歌姬目前唯一的搜索模块

DMPlugin_DGJ.dll放到“文档\弹幕姬\Plugins”这个文件夹下
这个不需要怎么解释，就和以前的插件一样
主要解释一下这个搜索模块是啥东西
点歌姬不像弹幕点歌一样在插件中写死歌曲的搜索
点歌姬的歌曲搜索是由这些搜索模块负责的

LWLAPI.gem就是一个相对完善好用的搜索模块（由宅急送队长和LWL12共同开发
所有人都可以自己写点歌姬的歌曲搜索（前提是你会写.NET平台的一种语言，比如C#、VB.NET
点歌姬会从“文档\弹幕姬\Plugins\点歌姬\曲源”这个文件夹
加载所有后缀为“gem”的文件并尝试加载为歌曲搜索模块

--------------重点
废话了这么一堆，其实就是告诉你。。
记得把LWLAPI.gem放到“\点歌姬\曲源”文件夹下面才能点歌
LWLAPI.gem是歌曲搜索的核心。。
注：LWLAPI也是搜索网易云音乐的歌曲
--------------重点

以后可能会做其他歌曲平台的搜索模块
放到这个曲源文件夹里面加载就可以用了

切歌可以在歌曲列表面板右键删除歌曲
删除某条黑名单也是右键删除

点歌姬所有配置文件和临时文件都在
“文档\弹幕姬\Plugins\点歌姬”
这个文件夹下，包括供OBS/直播姬读取用的txt文件
暂时不支持自定义歌曲列表输出格式


其他的地方随便点一点也应该就能会用了吧？就先不写了




面向开发者，搜索模块开发方法：懒得写面向小白的手把手教程（逃
把DMPlugin_DGJ.dll丢VS的对象浏览器里自己看结构吧，蛮简单的
核心是继承SongsSearchModule类，返回SongItem
可选重写Download、Setting方法（须设置_HandleDownload、_NeedSettings为true
如有需要可以私聊找我要XML注释文件，就不在压缩包里放了