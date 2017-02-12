---
title: 插件目录 - 弹幕姬
div-style: "max-width:1400px;margin-top:20px;"
---
<!--<li><h3><a class="post-link" href="{{ pl.url }}">{{ pl.title | escape }} | {{ pl.plugin_desc | escape }}</a></h3></li>-->
<!-- 这坨换行。。强迫症要死了。。输出整齐与代码整齐不可兼得 -->
{% assign times = 0 %}{% for pl in site.plugin %}{% unless pl.hide == true %}
{% if times == 0 %}<!-- 输出一行的开始标签 --><div class="w3-row-padding">{% endif %}
{% assign times = times | plus:1 %}<!-- times += 1; -->
<!-- 插件信息开始 -->
<div class="plugin-page-card w3-quarter w3-container w3-margin-bottom">
<a href="{{ pl.url }}"><div class="w3-container w3-theme-l4 w3-card-4">
<p><b>{{ pl.plugin_name | escape }}</b></p>
<p>{{ pl.plugin_desc | escape }}</p>
</div></a></div>
<!-- 插件信息结束 -->
{% if times == 4 %}<!-- if(times==4) 输出一行的结束 --></div>{% assign times = 0 %}<!-- 重设times=0 -->{% endif %}
{% endunless %}{% endfor %}
{% if times != 0 %}<!-- 需要多输出一个</div> --></div>{% endif %}<br>
