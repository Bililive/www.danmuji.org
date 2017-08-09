---
title: 关注提醒
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 关注提醒
plugin_desc: 有新观众关注时发出提醒
plugin_version: 1.2.0
plugin_update_datetime: 2017-08-09 21:50:00 +0800
plugin_update_desc: |-
  因为B站接口变动，旧插件已不能使用，请升级到最新版本。
plugin_dllink: /resource/FollowAlert/FollowAlert1.2.0.zip
#plugin_dlnote: 并不需要下载说明
---
### 安装使用方法

将插件放到 `文档\弹幕姬\Plugins\` 文件夹里  
重启弹幕姬，在弹幕姬的 “插件” 面板启用插件即可

插件已添加防刷屏功能，观众连续关注、取关主播不会导致提醒刷屏。

插件会把关注人的名字显示到弹幕侧边栏。  
并且写入到文件，供主播展示到直播画面中。每个关注人在文件中保留五秒（直播画面中停留五秒）。

<img class="shadow" src="https://www.danmuji.cn/resource/FollowAlert/pic.png" alt="插件界面" />

<br/>

### 常用直播软件添加从文件读取的文字方法

OBS Classic 添加来源方法：

1. 在“来源”中右键，选择“添加”、“文字来源”
2. 随便填写一个容易区分的来源名字，确认
3. 点击 “使用文件中的文字”，点击浏览，选择需要显示的文件
4. 调整颜色、字体、样式到想要的样子

<br/>

哔哩哔哩直播姬添加来源方法：

1. 点击左下角的 “文本”
2. 给来源设置一个容易区分的名字
3. 勾选 “从文件读” 前面的勾选框
4. 点击浏览，选择需要显示的文件
5. 调整颜色、字体、样式到想要的样子