---
hide: false
title: 'Re: TTSCat'
auther: Elepover
plugin_author: Elepover
plugin_name: 'Re: TTSCat'
plugin_desc: 直接读出你收到的弹幕和礼物！
plugin_version: 3.10.2.726
plugin_update_datetime: 2021-05-21 15:00:00 +0800
plugin_update_desc: |-
  [i] 欢迎加入插件用户吹水企鹅群 966 646 967

  [+] 允许用户切换 DirectSound 接口输出，如果您使用
      外置声卡等设备遇到杂音，请尝试禁用此选项
  [+] 全新设计的关于插件页面
  [+] 支持正则表达式弹幕屏蔽规则
  [/] 去除了多余的更新检查
  [/] 修正了部分排版和边距问题
  [-] 去除了内嵌的百度高级版 Key，请自行添加

  [!] 使用点歌姬 v2 导致崩溃的用户请查看插件页面的注意事项
plugin_dllink: /resource/Re-TTSCat/Re-TTSCat.zip
plugin_contact: AHch5SetNHdpBEdhN2c0RXLlJHIzeI62uL5uKY6BCY6R+Y53+K6Iaa6N+Y5Wio5YKa6ueZ6Eq552uL5S+o5syp5zWY5Jyp5
plugin_dlnote: 请在下载前尽可能完整阅读插件说明和注意事项。
---

**将你收到的：弹幕！礼物！关注！统统合成为语音，读出来！**

用户交流吹水企鹅群 966 646 967

## 功能

![管理面板](/resource/Re-TTSCat/settings.png)

- **15 个**语音合成引擎
- 自定义高达 **15 种类型**的读出内容
- 支持随机读出
- 支持排队读出
- 支持老爷/舰队头衔
- 支持用户关注
- 合并刷屏礼物
- 用语音回复你收到的弹幕
- 全自动插件更新
- 支持离线语音合成引擎（降低网络占用）
- 各种各样的弹幕/礼物过滤方法

也同时欢迎大家反馈错误，我会尽可能听取意见。

感谢大家一如既往的支持！

## 安装使用

1. ↖ 下载插件
2. 解压，得到 `Re_TTSCat.dll`
3. 将其丢到弹幕姬插件目录里面（文档\弹幕姬\Plugins）
4. 启动/重启弹幕姬
5. 启动插件

## 注意事项

**使用点歌姬导致崩溃的用户请务必阅读第 1/2 条**

- **插件和点歌姬 v2 存在已知兼容性问题，如您加载弹幕姬时载入了点歌姬 v2 将导致弹幕姬崩溃**
- **[在这里下载点歌姬 v3](/plugins/DGJv3)**
- 您可以任意修改配置文件，但请不要在插件运行过程中进行修改以免发生错误。

## 问题反馈

如遇到问题，请在联系我时提供以下信息:

- 问题症状
- 如何复现该问题
- （如果弹幕姬崩溃，请一并提供以下内容）
- 事件查看器 -> `Windows 日志` -> `应用程序` -> 搜索来源为 `.NET Runtime` 的日志项目，双击后展开的**完整内容**
- 右键 Windows 徽标 -> `运行` -> 输入 `msinfo32.exe` -> `文件` -> `保存` 的结果
- 管理面板 -> 调试模式 -> 应用 -> `关于` 标签页的完整输出

## 自定义头衔

在 Re: TTSCat `3.3.25.405` 或更高版本中，插件已支持更多的自定义选项。

### 在弹幕或礼物中的更多自定义内容

在低版本中，我们一共提供了以下四个变量:

`$USER`: 发送弹幕的用户名

`$DM`: 弹幕内容

`$GIFT`: 礼物名称

`$COUNT`: 礼物数量

现在，适用于以下三种消息：

- 弹幕
- 醒目消息
- 礼物

可使用以下额外变量:

`$!USER`: 发送弹幕的用户名（带老爷头衔）

`$$USER`: 发送弹幕的用户名（带舰队头衔）

`$VIP`: 当用户是老爷时读出的老爷头衔，若用户不是老爷则为空

`$GUARD`: 用户的舰队头衔，普通用户默认为“用户”

> `$!USER` 与 `$$USER` 不可叠加，如 `$$!USER` 或 `$!$USER` 是不会叠加的。

### 自定义头衔格式

格式: `老爷/用户/总督/提督/舰长`

例 1: 不显示用户头衔，其它保留原样

`老爷//总督/提督/舰长`

用户字段留空，但不要删去分隔符（`/`）

例 2: 将老爷头衔设定为“大哥”

`大哥/用户/总督/提督/舰长`

如格式错误，保存时将报错并**回滚为修改前的值**。

## 语音答复配置

### 语音合成

填入需朗读的内容即可。

### 预置音频

填入**完整的文件名**（包括路径），如：

`C:\Users\Manager\Desktop\测试.mp3`

**请勿**使用:

`测试.mp3`

也**请勿**包含引号，如:

`"C:\Users\Manager\Test audio\测试.mp3"`

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

**仅适用于部分使用自定义 TTS 引擎的极客用户**。

普通用户可直接转到[问题反馈](#问题反馈)。

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
