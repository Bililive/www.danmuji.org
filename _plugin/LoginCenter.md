---
hide: false
title: 登录中心
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 登录中心
plugin_desc: 登录B站账号供其他插件使用
plugin_version: 1.2.3
plugin_update_datetime: 2019-06-01 00:00:00 +0800
plugin_update_desc: |-
  恢复用户名密码登录功能，内部接口修改
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

支持使用客户端扫码登录和手动输入 Cookie。  
账号数据在简单加密后保存到 `文档\弹幕姬\Plugins\登录中心\账号数据` ，请注意不要把账号信息发给别人

<br/>

## 插件授权

其他插件只有在经过授权后才能使用B站账号。  
在其他插件申请授权后，“登录中心” 会弹出一个弹窗询问用户是否同意授权。  
可以在 “登录中心” 的界面中取消或临时禁用插件的授权。

<br/>

## 面向开发者 - 使用“登录中心”的API

所有提供给其他插件使用的接口均在 `LoginCenter.API` 命名空间下  
未授权访问账号相关接口会抛出 `PluginNotAuthorizedException`  
有问题可以加开发群 553934452 询问
