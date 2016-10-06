---
layout: default
title: 插件目录 - 弹幕姬
permalink: /plugins/
---
{% for pl in site.plugin %}
  <li>
    <h2>
      <a class="post-link" href="{{ pl.url }}">{{ pl.title | escape }}</a>
    </h2>
  </li>
{% endfor %}