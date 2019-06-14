---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.0.1.216
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
  [/] 修复了更新窗口的排版问题。
  [/] 关于按钮指向的链接不再 404 了。
  [/] 一点点 UI 修复。
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

# Re: TTSCat

**将你收到的：弹幕！礼物！统统合成为语音，读出来！**

## 功能:

- 3 个语音合成引擎
- 自定义高达 7 种类型的事件读出内容
- 支持以一定概率读出文本
- 支持排队读出文本
- 支持离线语音合成引擎
- 各种各样的弹幕/礼物过滤方法

也同时欢迎您向我反馈错误，我会尽可能听取意见。

感谢大家一如既往的支持！

## 安装使用

1. ↖ 下载插件。
2. 解压，得到 `Re_TTSCat.dll` 以及 `NAudio.dll`。
3. 将这两个文件全部丢到弹幕姬插件目录里面（不要分开）。
4. 启动/重启弹幕姬。
5. 启动插件。

## 注意事项

- 首次启动插件，将会在插件文件夹创建 `Re-TTSCat` 目录。
- 您可以自行修改配置文件，但请不要在插件运行过程中操作。
- 若丢失 `NAudio.dll` 文件，插件将会显示警告信息并拒绝执行任何操作，直到您补回 `NAudio.dll` 文件并重启弹幕姬。
- 启用调试模式会解锁一些好玩的东西，但是请注意：**后果自负**。

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

## 运行截图

![管理](/resource/Re-TTSCat/conf.png)

![过滤设置](/resource/Re-TTSCat/blocking.png)

![高级功能](/resource/Re-TTSCat/advanced-features.png)