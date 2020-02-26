---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.1.16.320
plugin_update_datetime: 2020-02-26 14:40:00 +0800
plugin_update_desc: |-
  [i] 未来的更新消息格式将会变更为如下所示：
  [i] 本版本解决了 6 个问题，未新增功能，推荐尽快更新。
  [√][重要] 解决和任务栏助手同时工作时在关闭弹幕姬时崩溃的问题
  [√][重要] 解决未启用插件时点击断开连接导致报错并在此后无法启动插件的问题
  [√][中等] 解决非调试模式随机朗读无效的问题
  [√][一般] 解决可以打开多个管理窗口的问题
  [√][一般] 解决管理窗口在关闭弹幕姬后仍然活动且此后关闭管理窗口导致报错的问题
  [√][一般] 减少日志输出量，可启用调试模式查看更多日志
  [!] 使用点歌姬 v2 导致崩溃的用户请查看插件页面的注意事项
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_contact: AHch5SetNHdpBEdhN2c0RXLlJHIzeI62uL5uKY6BCY6R+Y53+K6Iaa6N+Y5Wio5YKa6ueZ6Eq552uL5S+o5syp5zWY5Jyp5
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

**将你收到的：弹幕！礼物！统统合成为语音，读出来！**

## 功能

![管理面板](/resource/Re-TTSCat/settings.png)

- 6 个语音合成引擎
- 自定义高达 7 种类型的事件读出内容
- 支持以一定概率读出文本
- 支持排队读出文本
- 支持离线语音合成引擎（降低网络占用）
- 各种各样的弹幕/礼物过滤方法

也同时欢迎大家反馈错误，我会尽可能听取意见。

感谢大家一如既往的支持！

## 安装使用

1. ↖ 下载插件
2. 解压，得到 `Re_TTSCat.dll`
3. 将其丢到弹幕姬插件目录里面
4. 启动/重启弹幕姬
5. 启动插件

## 注意事项

**使用点歌姬导致崩溃的用户请看第 1/2 条**

- **插件和点歌姬 v2 存在已知兼容性问题，如您加载弹幕姬时载入了点歌姬 v2 将导致弹幕姬崩溃**
- **[在这里下载点歌姬 v3](/resource/DGJv3/DGJv3.7z)**
- 插件依赖框架版本: .NET Framework 4.6.1 [(在这里下载)](https://www.microsoft.com/zh-cn/download/details.aspx?id=49982)
- 缺失 .NET Framework 4.6.1 将导致启动插件时弹幕姬崩溃。
- 首次启动插件，将会在插件文件夹创建 `Re-TTSCat` 目录。
- 您可以自行修改配置文件，但请不要在插件运行过程中进行修改。
- 若丢失 `NAudio.dll` 文件，插件将会显示警告信息并拒绝启动，直到您补回 `NAudio.dll` 文件并重启弹幕姬。
- 在 Re: TTSCat `3.0.9.271` 或更高版本中，插件将自动释放并载入 `NAudio.dll` 支持库。
- 如果您从低版本升级而来，请记得**删除**原有的 `NAudio.dll`.
- 启用调试模式会解锁一些好玩的东西，但是请注意：**后果自负**。

## 文件结构

```
- Plugins           [D] 弹幕姬插件目录
|-- Re_TTSCat.dll   [F] 插件本体
|-- Re-TTSCat       [D] 插件配置目录
| |-- Config.json   [F] 插件配置文件
| |-- Cache         [D] 缓存文件夹
| | |-- TTS*.mp3    [F] Google/百度 TTS 引擎生成的临时文件
| | |-- TTS*.wav    [F] .NET 框架引擎生成的临时文件
```

## 更多运行截图

![过滤设置](/resource/Re-TTSCat/blocking.png)

![高级功能](/resource/Re-TTSCat/advanced-features.png)

## 问题反馈

如遇到问题，请在联系我时提供以下信息:

- 问题症状
- 如何复现该问题
- （如果弹幕姬崩溃，请一并提供以下内容）
- 事件查看器 -> `Windows 日志` -> `应用程序` -> 搜索来源为 `.NET Runtime` 的日志项目
- 右键 Windows 徽标 -> `运行` -> 输入 `msinfo32.exe` -> `文件` -> `保存` 的结果
