---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.0.1.214
plugin_update_datetime: 2019-06-13 20:30:00 +0800
plugin_update_desc: |-
  是 Re: TTSDanmaku v3!
  [!] 高考结束，高三党生活结束，继续更新！
  [/] 彻底重写插件后端。
  [/] 现在弹幕字数同时有上限和下限限制可选。
  [/] 插件不会在弹幕姬启动和退出时搞事了。
  [-] 砍掉了托盘图标，请改用任务栏助手。
  [+] 提高稳定性。
  [+] 框架自带语音引擎可用咯！
  [+] 被砍掉的音量控制回归！
  [+] 现在可以以一定概率朗读文本。
  [+] 支持处理更多事件类型并自定义朗读内容。
  [/] 更新插件依赖。
  [/] 对话框不会再阻塞主线程了。
#  当次更新介绍写这里，可选
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

# Re: TTSCat

**将你收到的：弹幕！礼物！统统合成为语音，读出来！**

目前提供以下语音合成引擎:

- 百度翻译 TTS
- .NET 框架自带语音合成
- Google Translate 语音合成 ~~（信仰加成）~~

> 也同时欢迎您向我反馈错误，我会尽可能听取意见。
>
> 感谢大家一如既往的支持！

*作者不对在任何非弹幕姬官网下载插件的任何用户提供任何支持。*

# 安装使用

1. ↖ 下载插件。
2. 解压，得到 `Re_TTSCat.dll` 以及 `NAudio.dll`。
3. 将这两个文件全部丢到弹幕姬插件目录里面。
4. 启动/重启弹幕姬。
5. 启动插件。

## 注意事项

- 首次启动插件，将会在插件文件夹创建 `Re-TTSCat` 目录。
- 若丢失 `NAudio.dll` 文件，插件将会显示警告信息并拒绝执行任何操作，直到您补回 `NAudio.dll` 文件并重启弹幕姬。
- 启用调试模式会有一些好玩的东西，但是请注意：**后果自负**。

## 文件结构

```
- Plugins           [D] 弹幕姬插件目录。
|-- Re_TTSCat.dll   [F] 插件本体。
|-- NAudio.dll      [F] NAudio 播放库。
|-- Re-TTSCat       [D] 插件配置目录。
| |-- Config.json   [F] 插件配置文件。
| |-- Cache         [D] 缓存文件夹。
| | |-- TTS*.mp3    [F] Google/百度 TTS 引擎生成的临时文件。
| | |-- TTS*.wav    [F] .NET 框架引擎生成的临时文件。
```

# 运行截图

![管理](/resource/Re-TTSCat/conf.png)
