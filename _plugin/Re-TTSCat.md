---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.0.7.235
plugin_update_datetime: 2019-07-30 15:40:00 +0800
plugin_update_desc: |-
  [+] 新增有道 TTS 引擎
  [/] 修改了 TTS 获取机制，降低 562 可能性
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_contact: t92Yus2bvxGd19GQyVmdvBXZsVGIwiY52uL5uKY6BCY6R+Y53+K6YKa6ueZ6Eq552uL5S+o5syp5
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

**将你收到的：弹幕！礼物！统统合成为语音，读出来！**

## 功能

- 5 个语音合成引擎
- 自定义高达 7 种类型的事件读出内容
- 支持以一定概率读出文本
- 支持排队读出文本
- 支持离线语音合成引擎
- 各种各样的弹幕/礼物过滤方法

也同时欢迎您向我反馈错误，我会尽可能听取意见。

感谢大家一如既往的支持！

## 安装使用

1. ↖ 下载插件
2. 解压，得到 `Re_TTSCat.dll` 以及 `NAudio.dll`
3. 将这两个文件全部丢到弹幕姬插件目录里面（不要分开）
4. 启动/重启弹幕姬
5. 启动插件

## 注意事项

- 插件依赖框架版本: .NET Framework 4.6.1 [(在这里下载)](https://www.microsoft.com/zh-cn/download/details.aspx?id=49982)
- 首次启动插件，将会在插件文件夹创建 `Re-TTSCat` 目录。
- 您可以自行修改配置文件，但请不要在插件运行过程中进行修改。
- 若丢失 `NAudio.dll` 文件，插件将会显示警告信息并拒绝启动，直到您补回 `NAudio.dll` 文件并重启弹幕姬。
- 启用调试模式会解锁一些好玩的东西，但是请注意：**后果自负**。

## 文件结构

```
- Plugins           [D] 弹幕姬插件目录
|-- Re_TTSCat.dll   [F] 插件本体
|-- NAudio.dll      [F] NAudio 播放库
|-- Re-TTSCat       [D] 插件配置目录
| |-- Config.json   [F] 插件配置文件
| |-- Cache         [D] 缓存文件夹
| | |-- TTS*.mp3    [F] Google/百度 TTS 引擎生成的临时文件
| | |-- TTS*.wav    [F] .NET 框架引擎生成的临时文件
```

## 运行截图

![管理](/resource/Re-TTSCat/settings.png)

![过滤设置](/resource/Re-TTSCat/blocking.png)

![高级功能](/resource/Re-TTSCat/advanced-features.png)
