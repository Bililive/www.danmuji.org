---
hide: true
title: 弹幕日志
auther: 芒小七七七
plugin_author: 芒小七七七
plugin_name: 弹幕日志
plugin_desc: 输出弹幕日志
plugin_version: 1.0.0
plugin_update_datetime: 2020-8-25
plugin_update_desc: |-
  优化部分代码。
plugin_dllink: /resource/DanmuLog/DanmuLog.zip
plugin_dlnote: 只在弹幕姬官网提供下载,请勿转载。
---

若插件有任何问题，或者有任何建议请在B站找@Aschin录播站,或发送邮件至354311457@qq.com。

插件页面示例
---
<img class="shadow" src="https://www.danmuji.org/resource/DanmuLog/Preview1.png" alt="插件界面1" />
<img class="shadow" src="https://www.danmuji.org/resource/DanmuLog/Preview2.png" alt="插件界面2" />
<img class="shadow" src="https://www.danmuji.org/resource/DanmuLog/Preview3.png" alt="插件界面3" />

---
[插件源代码](https://github.com/kawayifork/DanmuLog)
---

插件功能
---
- 只输出弹幕日志（包括留言）。
- 只输出用户名（没有头衔）和其发送的内容。
- 提示主播开播/ 下播， 直播间已连接/ 已断开。
- 分离多房间的弹幕。
- 默认输出的是弹幕日志，这个是方便回看的。
- 弹幕字幕是给后续的弹幕字幕转换器使用的（已经放在TODO List里了）。

插件安装
---
1. 下载并解压至弹幕姬的插件目录下。
2. 重启弹幕姬。
3. 外挂程式里右键插件-启用外挂程式。
4. 右键插件-管理-可选择弹幕日志/ 弹幕字幕。

使用说明
---
- 第一次运行时会创建目录 `弹幕姬\Plugins\DanmuLog`。
- 在成功连接房间后该目录下会生成一个对应的txt文件。
- `Log-房间号-日期.txt` 是弹幕日志文件。
- `Data-房间号-日期.txt` 是弹幕字幕文件。

*经测试可与任务栏助手搭配使用。*  
**如果使用多个弹幕姬（房间），建议搭配任务栏助手进行使用。**  

更新日志
---
- 2020/08/25 设置里的选项改为单选，优化了代码防止遗漏弹幕的问题，终于出正式版了。
