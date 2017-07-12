---
#hide: true
title: 登录中心
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 登录中心
plugin_desc: 登录B站账号供其他插件使用
plugin_version: 1.1.0
plugin_update_datetime: 2017-07-12 00:01:30 +0800
plugin_update_desc: |-
  旧版“弹幕发送”和“登录中心”已不能使用
  请更新到最新版本
  弹幕发送插件: https://www.danmuji.cn/plugins/SendDanmaku
plugin_dllink: /resource/LoginCenter/LoginCenter.zip
#plugin_dlnote: 请不要二次上传到其他网站谢谢
---

<img class="shadow" src="https://www.danmuji.cn/resource/LoginCenter/1.png" alt="插件界面" />

## 安装插件

下载插件后解压压缩包，把 `LoginCenter.dll` 放到插件文件夹。  
插件文件夹在 `文档\弹幕姬\Plugins` （Win7中，“文档” 叫做 “我的文档”）  
放到插件文件夹后需要重启弹幕姬。

<br/>

## 登录账号

安装插件后，在弹幕姬的插件列表中，右键“登录中心”点击“管理”打开插件界面。

支持使用 账号密码登录 、 客户端扫码登录 和 手动输入 Cookie。  
账号数据将加密后保存到 `文档\弹幕姬\Plugins\登录中心\账号数据` ，请注意不要把账号信息发给别人

<br/>

## 插件授权

其他插件只有在经过授权后才能使用B站账号。  
在其他插件申请授权后，“登录中心” 会弹出一个弹窗询问用户是否同意授权。  
可以在 “登录中心” 的界面中取消或临时禁用插件的授权。

<br/>

## 面向开发者 - 使用“登录中心”的API

所有提供给其他插件使用的接口均在 `LoginCenter.API` 命名空间下  
未授权访问账号相关接口会抛出 `PluginNotAuthorizedException`  
如需XML注释文件或询问问题，请联系宅急送队长（15253直播间）或加群

