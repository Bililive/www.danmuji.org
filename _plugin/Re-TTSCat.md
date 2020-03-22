---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.2.23.391
plugin_update_datetime: 2020-03-22 20:30:00 +0800
plugin_update_desc: |-
  [i] 本版本新增了 7 个功能。
  [+][一般] 自定义 TTS 引擎支持三种 POST 请求 (Alpha)
  [+][一般] 自定义 TTS 引擎支持添加额外请求头
  [+][一般] 更清晰的崩溃对话框（希望永远用不着）
  [+][一般] 可禁用崩溃错误捕捉
  [+][一般] 自动更新支持库
  [+][一般] 支持库完整性校验
  [+][一般] 代码自签名
  [i] 签名证书指纹: 8b74b37bedcb8f44e856f37f4c5f3ec193e23d01
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

**使用点歌姬导致崩溃的用户请务必阅读第 1/2 条**

- **插件和点歌姬 v2 存在已知兼容性问题，如您加载弹幕姬时载入了点歌姬 v2 将导致弹幕姬崩溃**
- **[在这里下载点歌姬 v3](/resource/DGJv3/DGJv3.7z)**
- 插件依赖框架版本: .NET Framework 4.6.1 [(在这里下载)](https://www.microsoft.com/zh-cn/download/details.aspx?id=49982)
- 缺失 .NET Framework 4.6.1 将导致启动插件时弹幕姬崩溃。
- 您可以任意修改配置文件，但请不要在插件运行过程中进行修改以免发生错误。
- 在 Re: TTSCat `3.0.9.271` 或更高版本中，插件将自动释放并载入 `NAudio.dll` 支持库。
- 如果您从低版本升级而来，请记得**删除**原有的 `NAudio.dll`.
- 启用调试模式会解锁一些好玩的东西，但是请注意：**后果自负**。

## 文件结构

```
- Plugins           [D] 弹幕姬插件目录
|-- Re_TTSCat.dll   [F] 插件本体
|-- Re-TTSCat       [D] 插件配置目录
| |-- Config.json   [F] 插件配置文件
| |-- NAudio.dll    [F] 音频支持库
| |-- Cache         [D] 缓存文件夹
| | |-- TTS*.mp3    [F] Google/百度 TTS 引擎生成的临时文件
| | |-- TTS*.wav    [F] .NET 框架引擎生成的临时文件
```

## 更多运行截图

![过滤设置](/resource/Re-TTSCat/blocking.png)

![高级功能](/resource/Re-TTSCat/advanced-features.png)

## 自定义请求头

示例 JSON 数据:

```json
[
  {
    "Name": "Accept-Encoding",
    "Value": "gzip"
  },
  {
    "Name": "Cookie",
    "Value": "logged_in=yes; session=4f5dc1d1-f5bc-47ab-ad0b-f92e498386f3; token=c0b30704-57f0-4f74-ad0b-b6a7c4336b27; tz=Asia%2FShanghai"
  },
  {
    "Name": "DNT",
    "Value": 1
  }
]
```

## 自定义 POST 数据

通过三种 POST 请求传入以下数据

| 名称 | 内容 |
|:-----|-----:|
| `logged_in` | `yes` |
| `session` | `4f5dc1d1-f5bc-47ab-ad0b-f92e498386f3` |
| `token` | `c0b30704-57f0-4f74-ad0b-b6a7c4336b27` |
| `tz` | `Asia/Shanghai` |

### application/x-www-form-urlencoded

直接填入 POST 请求内容，如

`logged_in=yes&session=4f5dc1d1-f5bc-47ab-ad0b-f92e498386f3&token=c0b30704-57f0-4f74-ad0b-b6a7c4336b27&tz=Asia%2FShanghai`

### multipart/form-data

示例 JSON 数据:

```json
[
  {
    "Name": "logged_in",
    "Value": "eWVz"
  },
  {
    "Name": "session",
    "Value": "NGY1ZGMxZDEtZjViYy00N2FiLWFkMGItZjkyZTQ5ODM4NmYz"
  },
  {
    "Name": "token",
    "Value": "YzBiMzA3MDQtNTdmMC00Zjc0LWFkMGItYjZhN2M0MzM2YjI3"
  },
  {
    "Name": "tz",
    "Value": "QXNpYS9TaGFuZ2hhaQ"
  }
]
```

### text/plain

纯文本，想怎么样就写么样

## 问题反馈

如遇到问题，请在联系我时提供以下信息:

- 问题症状
- 如何复现该问题
- （如果弹幕姬崩溃，请一并提供以下内容）
- 事件查看器 -> `Windows 日志` -> `应用程序` -> 搜索来源为 `.NET Runtime` 的日志项目，双击后展开的**完整内容**
- 右键 Windows 徽标 -> `运行` -> 输入 `msinfo32.exe` -> `文件` -> `保存` 的结果
- 管理面板 -> 调试模式 -> 应用 -> `关于` 标签页的完整输出