---
layout: default
title: 插件目录 - 弹幕姬
permalink: /plugins/
---
{% for pl in site.plugin %}
<li><h3><a class="post-link" href="{{ pl.url }}">{{ pl.title | escape }} | {{ pl.plugin_desc | escape }}</a></h3></li>
{% endfor %}