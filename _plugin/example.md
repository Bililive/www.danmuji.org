---
hide: true
title: 示例插件
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 示例插件
plugin_desc: 这只是一个插件示例
plugin_version: 1.0.0
plugin_update: 2016.10.11
plugin_dllink: #
#plugin_dlnote: 并不需要下载说明
---

# 这是一个插件页面示例！！

Coding更新测试

## 两个

### 三个

#### 四个

##### 五个

###### 六个

[这是一个链接](/)

- 这个
- 二个
- 三个
- 四个

1. 第一
2. 第二
3. 第三
4. 第四

*斜体字斜体字斜体字斜体字*  
_斜体字斜体字斜体字斜体字_  
**加粗字加粗字加粗字加粗字**  
__加粗字加粗字加粗字加粗字__  

![图片测试1](https://img.cdn.lwl12.com/images/2016/02/14/11866259963a70bbc50b9b9f63e86345.png "图片啦啦啦")

### 弹幕姬部分源码：
```csharp
if (ApplicationDeployment.IsNetworkDeployed)
{
    Title += "   版本号: " + ApplicationDeployment.CurrentDeployment.CurrentVersion;
}
else
{
    Title += "   *傻逼版本*";
#if !DEBUG
    if (!Debugger.IsAttached)
    { MessageBox.Show(Application.Current.MainWindow, "你的打开方式不正确");
    this.Close(); }
#endif
}
Title += "   编译时间: " + dt;

InitPlugins();
Closed += MainWindow_Closed;
HelpWeb.Source = new Uri("http://soft.ceve-market.org/bilibili_dm/app.htm?" + DateTime.Now.Ticks);
    //fuck you IE cache
b.Disconnected += b_Disconnected;
b.ReceivedDanmaku += b_ReceivedDanmaku;
b.ReceivedRoomCount += b_ReceivedRoomCount;
```