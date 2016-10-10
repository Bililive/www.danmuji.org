## <a name="menu"></a>目录
1. [Fork修改说明](#fork)
    1. [目录结构](#structure)
    2. [关于锚点链接](#anchor)
    3. [添加自己的插件到网站](#addplugin)
2. [站点API](#api)
    1. [插件列表](#pluginlist)
    2. [单个插件信息](#plugininfo)

<br/>
## Fork修改说明

### <a name="structure"></a>目录结构

```sh
.
├── _apiv1 -------------------  api相关文件
|   ├── apiv1.all.list.md
|   ├── apiv1.all.map.md
|   ├── XXX.md ---------------  添加插件后在此添加一个同名文件
|   ├── YYY.md
|   ...
├── _data
|   └── navbar.yml -----------  导航栏中的内容
├── _includes
|   ├── docs.md --------------  本页面的内容
|   ├── navbar.html ----------  导航栏
|   ├── head.html ------------  head中的部分内容
|   ├── footer.html ----------  页脚
|   ...
├── _layouts
|   ├── apiv1.html -----------  单个插件信息
|   ├── apiv1.list.html ------  list格式所有插件信息
|   ├── apiv1.map.html -------  map格式所有插件信息
|   ├── default.html ---------  默认页面
|   └── plugin.html ----------  插件介绍页面
├── _pages
|   ├── docs.md --------------  本页面除内容以外部分
|   └── plugins.md -----------  插件列表页面
├── _plugin
|   ├── XXX.md ---------------  插件介绍页
|   ├── YYY.md
|   ...
├── css ----------------------  各种css文件
├── _config.yml --------------  站点配置文件
└── index.html ---------------  首页
```

### 关于锚点链接(anchor)

markdown中的标题（若干个#开头）会生成一个带ID的```hX```标签。但是id是使用标题中的英文和数字的，如果整个标题中都没有英文数字，将使用```section``` ```section-1``` ```section-2```等作为ID。为了能方便使用锚点链接，有两个方法可以设定固定名字的锚点，一个是在标题中添加至少一个英文单词（就像这一段文字的标题一样）；另一个方法是在标题前添加```<a name="名字"></a>```。

### <a name="addplugin"></a>添加自己的插件到网站

目前添加一个插件需要添加两个md文件。一个在```_plugin```文件夹，放置插件的信息以及介绍。另一个在```_apiv1```文件夹，用于网站api。

```_plugin``` 文件夹中的文件格式如下：

```
---
title: 页面标题，一般情况下与插件名字一致
auther: 页面编辑人，显示在页面右下角
plugin_author: 插件作者
plugin_name: 插件名字
plugin_desc: 插件的一句话说明
plugin_version: 版本号
plugin_update: 更新日期
plugin_dllink: 下载地址，下载外联或下载页面皆可
plugin_dlnote: 下载说明，可选，不需要时在最前加“#”即可
#此部分每行前面带#为注释（其实这块就是yml）
---
Markdown格式的插件介绍正文
```

文件名将为插件ID在API中使用  
插件版本号请使用支持 [System.Version](https://msdn.microsoft.com/zh-cn/library/system.version(v=vs.110).aspx) 的格式  
更新日期请使用 年.月.日 的格式，比如 2016.10.1

```_apiv1``` 文件夹中需要添加一个同名文件，内容：

```
---
---
```

因为Jekyll的限制，不使用插件的话，同一个源文件不能输出两个文件，所以需要用这种方法实现api

<br/>
## 站点API

目前网站所有API的访问路径都在 /api/v1/ 下，均为Json

### <a name="pluginlist"></a>插件列表

数组格式：[/api/v1/all.list](/api/v1/all.list)

```json
[
  {
    "id": "example",
    "name": "示例插件",
    "author": "宅急送队长",
    "version": "1.0.0",
    "description": "这只是一个插件示例",
    "updatetime": "2016.10.11",
    "dl_url": "",
    "dl_note": ""
  },
  {
    "id": "example2",
    "name": "示例插件2",
    "author": "宅急送队长",
    "version": "1.0.0",
    "description": "这只是一个插件示例",
    "updatetime": "2016.10.11",
    "dl_url": "",
    "dl_note": ""
  }
]
```

Map格式：[/api/v1/all.map](/api/v1/all.map)

```json
{
  "example": {
    "id": "example",
    "name": "示例插件",
    "author": "宅急送队长",
    "version": "1.0.0",
    "description": "这只是一个插件示例",
    "updatetime": "2016.10.11",
    "dl_url": "",
    "dl_note": ""
  },
  "example2": {
    "id": "example2",
    "name": "示例插件2",
    "author": "宅急送队长",
    "version": "1.0.0",
    "description": "这只是一个插件示例",
    "updatetime": "2016.10.11",
    "dl_url": "",
    "dl_note": ""
  }
}
```

### <a name="plugininfo"></a>单个插件信息

示例：[/api/v1/插件ID](/api/v1/example)

```json
{
  "id": "example",
  "name": "示例插件",
  "author": "宅急送队长",
  "version": "1.0.0",
  "description": "这只是一个插件示例",
  "updatetime": "2016.10.11",
  "dl_url": "",
  "dl_note": ""
}
```