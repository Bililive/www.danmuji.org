---
hide: true
title: 常见安装问题 - 弹幕姬
div-style: "margin-top:20px;padding: 20px 20px 150px 20px;font-size:1.2em;"
---

## 开始

点击遇到的问题一样的图片

- [__#bootstrapper__ ![bootstrapper](/pics/t/bootstrapper.png)](#bootstrapper)
- [__#clickonce__ ![clickonce](/pics/t/clickonce.png)](#clickonce)
- [__#stoppedworking__ ![stoppedworking](/pics/t/stoppedworking.png)](#stoppedworking)
- [__#clickonceregister__ ![clickonceregister](/pics/t/clickonceregister.png)](#clickonceregister)

---

## bootstrapper

- [__#bootstrapperclickonce__ ![bootstrapperclickonce](/pics/t/bootstrapperclickonce.png)](#bootstrapperclickonce)
- [__#bootstrapperdotnet__ ![bootstrapperdotnet](/pics/t/bootstrapperdotnet.png)](#bootstrapperdotnet)

---

## clickonce

看这附近的错误信息

![clickoncelog](/pics/t/clickoncelog.png)

- 带有 `System.InvalidCastException` 字样 群机器人命令 `=转换无效`
- 带有 `proxy` 字样 群机器人命令 `=resetproxy`
- 其他错误信息暂时不确定

---

## bootstrapperclickonce

群内机器人命令 `=下载失败`

## bootstrapperdotnet

群内机器人命令 `=dotnet`

---

## stoppedworking

先问是不是 Windows 7 安装了腾讯电脑管家，群机器人命令 `=重装dotnet`。找队长登记遇到了这个问题。

注：在阉割版系统上安装读弹幕插件也有可能出现 `已停止工作` 的错误，注意判断。

---

## clickonceregister

照着 [这篇微软文档](https://docs.microsoft.com/en-us/visualstudio/deployment/how-to-configure-the-clickonce-trust-prompt-behavior) ，修改一下注册表。注：纯英文文档

<div style="height:1000px"></div>
<style>hr{border-top:4px solid #333}</style>
