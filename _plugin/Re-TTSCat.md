---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 2.0.0.4
plugin_update_datetime: 2018-04-21 21:40:00 +0800
plugin_update_desc: |-
  [-] 鉴于稳定性因素移除了音量控制。
  [/] 一点点 UI 变更。
  [/] 启动插件时的更新检查现在可由「自动检查更新」选项控制。
#  当次更新介绍写这里，可选
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

# Re: TTSCat

最新版编译状态:

[![Build status](https://ci.appveyor.com/api/projects/status/nw9fwae1tsuc1o5c?svg=true)](https://ci.appveyor.com/project/Elepover/re-ttscat)

**将你收到的：弹幕！礼物！统统合成为语音，读出来！**

目前提供以下语音合成引擎:

- 百度翻译 TTS
- .NET 框架自带语音合成 ~~（不稳定）~~
- Google Translate 语音合成 ~~（信仰加成）~~

> 开发者目前身份为高中寄宿学生，所以更新依然会**比较随机化**。
> 
> 也同时欢迎您向我反馈错误，我会尽可能听取意见。
>
> 感谢大家一如既往的支持！

# 安装使用

1. ↖ 下载插件。
2. 解压，得到 `Re-TTSCat.dll` 以及 `NAudio.dll`。
3. 将这两个文件全部丢到弹幕姬插件目录里面。
4. 启动/重启弹幕姬。
5. 启动插件。

## 注意事项

- 首次启动插件，将会在插件文件夹创建 `Re-TTSCat` 目录。
- 无论您是否启用插件，启动弹幕姬时均会尝试激活插件。
- 若丢失 `NAudio.dll` 文件，插件将会显示警告信息并拒绝执行任何操作，直到您补回 `NAudio.dll` 文件并重启弹幕姬。
- 启用调试模式会有一些好玩的东西，但是请注意：**后果自负**。

## 文件结构

```
- Plugins           [D] 弹幕姬插件目录。
|-- Re-TTSCat.dll   [F] 插件本体。
|-- NAudio.dll      [F] NAudio 播放库。
|-- Re-TTSCat       [D] 插件配置目录。
| |-- TTSCat.xml    [F] 插件配置文件。
| |-- Cache         [D] 缓存文件夹。
| | |-- TTS*.mp3    [F] Google/百度 TTS 引擎生成的临时文件。
| | |-- TTS*.wav    [F] .NET 框架引擎生成的临时文件。
```

# 运行截图

启动：

![启动](/resource/Re-TTSCat/startup.png)

管理：

![管理](/resource/Re-TTSCat/conf.png)
