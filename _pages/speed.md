---
title: 网速单位计算器 - 弹幕姬
div-style: "max-width:1400px;margin-top:20px;"
---
<div class="w3-center">
	<h1>网速单位/数据大小单位 计算器</h1>
	<h3>搞懂单位，拒绝
		<ruby>
			<rb>丢人</rb>
			<rp>(</rp>
			<rt style="font-size:0.7em">退群</rt>
			<rp>)</rp>
		</ruby>
	</h3>
</div>
<div id="calculator" class="outer-center-wrapper">
	<div class="inter-center-wrapper">
		<table class="calculator">
			<tr>
				<th>数量/单位</th>
				<th>其他表达方式 &amp; 解释</th>
			</tr>
			<tr>
				<td><input v-model="byte">B</td>
				<td>Byte/字节、相当于 8b ( 8 Bit )</td>
			</tr>
			<tr>
				<td><input v-model="bit">b</td>
				<td>Bit/比特</td>
			</tr>
			<tr>
				<td><input v-model="kibibit">Kib</td>
				<td>KibiBit、相当于 1024 Bit、直播软件中所谓的“码率”是指的每秒传输此单位量数据</td>
			</tr>
			<tr>
				<td><input v-model="kibibyte">KiB</td>
				<td>KibiByte、相当于 1024 Byte、通常被习惯性写成“KB”</td>
			</tr>
			<tr>
				<td><input v-model="kilobyte">KB</td>
				<td>KiloByte、相当于 1000 Byte、真的“KB”</td>
			</tr>
			<tr>
				<td><input v-model="mebibyte">MiB</td>
				<td>MebiByte、相当于 1024 KiB、被习惯性写成“MB”、“我下载了5兆文件”指的是这个单位</td>
			</tr>
			<tr>
				<td><input v-model="megabyte">MB</td>
				<td>MegaByte、相当于 1000 KB、真的“MB”</td>
			</tr>
			<tr>
				<td><input v-model="mebibit">Mib</td>
				<td>MebiBit、相当于 1024 Kib、“我办的是100兆带宽网络”指的是这个单位</td>
			</tr>
			<tr>
				<td><input v-model="gibibyte">GiB</td>
				<td>GibiByte、相当于 1024 MiB、“这个游戏有2.6G”指的是这个单位</td>
			</tr>
		</table>
	</div>
</div>
<hr>
<div class="outer-center-wrapper">
	<div class="inter-center-wrapper">
		<div style="margin:auto;width:65%">
			<p>
				数据大小单位可以分为两部分，词头(Prefix) 和具体单位。词头即 K, M, Ki, Mi 等，具体单位为 Byte 和 Bit。
			</p>
			<p>
				早期的计算机因为没有统一的标准，使用两种不同的方法访问系统内存：二进制（逢二进一）或十进制（逢十进一）。 例如，IBM 701 (1952) 中使用二进制，可处理 2048 个字，每个字 36 比特(Bit)；而 IBM 702 (1953)
				使用十进制，可处理 10000 个 7 比特(Bit) 字。<br> 这些实际大小不同的量，都使用公制单位表达大小（如 kilo, mega, giga 等），曾经造成很大的混乱。<br> 1998 年，国际电工委员会 (International
				Electrotechnical Commission, IEC) 推出了二进制词头 (kibi, mebi, gibi 等) 来表达 1024, 1024<sup>2</sup>, 1024
				<sup>3</sup> 等， 使 1 048 576 个字节明确为 1 mebibyte。（对应的，1 000 000 字节为 1 megabyte）
			</p>
			<p>
				Byte 字节 与 Bit 比特 之间的关系则容易理解的多。<br> 1 Bit 相当于一个 “0” 或 “1”，而 1 Byte 相当于 “0000 0000” 到 “1111 1111” 之间的任意一个数（二进制的，相当于十进制的
				0 到 255）。 每个英文标点符号、英文字母和数字占 1 Byte，比如字母 A 为 0100 0001 (十进制：65)，字母 a 为 0110 0001 (十进制：97)。
			</p>
		</div>

		<!-- Start of "Binary prefix" Table -->
		<table style="margin:auto;" class="wikitable">
			<caption>由 IEC 60027-2 A.2 和 ISO/IEC 80000 定义的单位 (Binary prefix/二进制乘数词头)</caption>
			<tbody>
				<tr>
					<th colspan="2">国际电工委员会词头</th>
					<th colspan="4">含义</th>
					<th colspan="3">习惯性使用的词头</th>
				</tr>
				<tr>
					<th>名称</th>
					<th>符号</th>
					<th>基于 2 进制<sup>*</sup></th>
					<th>基于 1024 进制<sup>**</sup></th>
					<th>值</th>
					<th>基于 10 进制<sup>***</sup></th>
					<th>名称</th>
					<th>符号</th>
				</tr>
				<tr>
					<td>kibi</td>
					<td>Ki</td>
					<td>2<sup>10</sup></td>
					<td>1024<sup>1</sup></td>
					<td align="right"><span class="nowrap">1024</span>
					</td>
					<td>≈ <span class="nowrap">1.02<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>3</sup></span>
					</td>
					<td>kilo</td>
					<td>k 或 K</td>
				</tr>
				<tr>
					<td>mebi</td>
					<td>Mi</td>
					<td>2<sup>20</sup></td>
					<td>1024<sup>2</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">048</span>
						<span style="margin-left:.25em;">576</span>
						</span>
					</td>
					<td>≈ <span class="nowrap">1.05<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>6</sup></span>
					</td>
					<td>mega</td>
					<td>M</td>
				</tr>
				<tr>
					<td>gibi</td>
					<td>Gi</td>
					<td>2<sup>30</sup></td>
					<td>1024<sup>3</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">073</span>
						<span style="margin-left:.25em;">741</span><span style="margin-left:.25em;">824</span></span>
					</td>
					<td>≈ <span class="nowrap">1.07<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>9</sup></span>
					</td>
					<td>giga</td>
					<td>G</td>
				</tr>
				<tr>
					<td>tebi</td>
					<td>Ti</td>
					<td>2<sup>40</sup></td>
					<td>1024<sup>4</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">099</span>
						<span style="margin-left:.25em;">511</span><span style="margin-left:.25em;">627</span><span style="margin-left:.25em;">776</span></span>
					</td>
					<td>≈ <span class="nowrap">1.10<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>12</sup></span>
					</td>
					<td>tera</td>
					<td>T</td>
				</tr>
				<tr>
					<td>pebi</td>
					<td>Pi</td>
					<td>2<sup>50</sup></td>
					<td>1024<sup>5</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">125</span>
						<span style="margin-left:.25em;">899</span><span style="margin-left:.25em;">906</span><span style="margin-left:.25em;">842</span>
						<span style="margin-left:.25em;">624</span>
						</span>
					</td>
					<td>≈ <span class="nowrap">1.13<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>15</sup></span>
					</td>
					<td>peta</td>
					<td>P</td>
				</tr>
				<tr>
					<td>exbi</td>
					<td>Ei</td>
					<td>2<sup>60</sup></td>
					<td>1024<sup>6</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">152</span>
						<span style="margin-left:.25em;">921</span><span style="margin-left:.25em;">504</span><span style="margin-left:.25em;">606</span>
						<span style="margin-left:.25em;">846</span>
						<span style="margin-left:.25em;">976</span>
						</span>
					</td>
					<td>≈ <span class="nowrap">1.15<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>18</sup></span>
					</td>
					<td>exa</td>
					<td>E</td>
				</tr>
				<tr>
					<td>zebi</td>
					<td>Zi</td>
					<td>2<sup>70</sup></td>
					<td>1024<sup>7</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">180</span>
						<span style="margin-left:.25em;">591</span><span style="margin-left:.25em;">620</span><span style="margin-left:.25em;">717</span>
						<span style="margin-left:.25em;">411</span>
						<span style="margin-left:.25em;">303</span><span style="margin-left:.25em;">424</span></span>
					</td>
					<td>≈ <span class="nowrap">1.18<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>21</sup></span>
					</td>
					<td>zetta</td>
					<td>Z</td>
				</tr>
				<tr>
					<td>yobi</td>
					<td>Yi</td>
					<td>2<sup>80</sup></td>
					<td>1024<sup>8</sup></td>
					<td align="right"><span class="nowrap">1<span style="margin-left:.25em;">208</span>
						<span style="margin-left:.25em;">925</span><span style="margin-left:.25em;">819</span><span style="margin-left:.25em;">614</span>
						<span style="margin-left:.25em;">629</span>
						<span style="margin-left:.25em;">174</span><span style="margin-left:.25em;">706</span><span style="margin-left:.25em;">176</span></span>
					</td>
					<td>≈ <span class="nowrap">1.21<span style="margin-left:0.25em;margin-right:0.15em;">×</span>10<sup>24</sup></span>
					</td>
					<td>yotta</td>
					<td>Y</td>
				</tr>
			</tbody>
		</table>
		<div style="margin:auto;width: 38%;font-size: 0.5em;">
			* 基于 2 进制的科学计数法 &nbsp; ** 基于 1024 进制的科学计数法 &nbsp; *** 基于 10 进制的科学计数法
		</div>
		<!-- End of "Binary prefix" Table -->

		<ol style="margin:15 auto;width:40%">
			<h4>参考资料、数据来源：</h4>
			<span>CC BY-SA | 知识共享 署名-相同方式共享 3.0协议</span>
			<li><a target="_blank" href="https://en.wikipedia.org/wiki/File_size">https://en.wikipedia.org/wiki/File_size</a></li>
			<li><a target="_blank" href="https://en.wikipedia.org/wiki/Units_of_information">https://en.wikipedia.org/wiki/Units_of_information</a></li>
			<li><a target="_blank" href="https://en.wikipedia.org/wiki/Metric_prefix">https://en.wikipedia.org/wiki/Metric_prefix</a></li>
			<li><a target="_blank" href="https://en.wikipedia.org/wiki/Binary_prefix">https://en.wikipedia.org/wiki/Binary_prefix</a></li>
		</ol>
	</div>
</div>
<script src="https://unpkg.com/vue@2.3.3/dist/vue.min.js"></script>
<script>
	var vm = new Vue({
		el: '#calculator',
		data: {
			byte: 1024 * 1024 // 1 MiB
		},
		watch: {
			byte: function (value) {
				if (!isFinite(value) || value < 0) this.byte = 0
			}
		},
		computed: {
			bit: {
				get: function () {
					return this.byte * 8
				},
				set: function (params) {
					this.byte = params / 8
				}
			},
			// byte * 1024 --- Start
			kibibyte: {
				get: function () {
					return this.byte / 1024
				},
				set: function (params) {
					this.byte = params * 1024
				}
			},
			mebibyte: {
				get: function () {
					return this.kibibyte / 1024
				},
				set: function (params) {
					this.kibibyte = params * 1024
				}
			},
			gibibyte: {
				get: function () {
					return this.mebibyte / 1024
				},
				set: function (params) {
					this.mebibyte = params * 1024
				}
			},
			// byte * 1024 --- End
			// bit * 1024 --- Start
			kibibit: {
				get: function () {
					return this.bit / 1024
				},
				set: function (params) {
					this.bit = params * 1024
				}
			},
			mebibit: {
				get: function () {
					return this.kibibit / 1024
				},
				set: function (params) {
					this.kibibit = params * 1024
				}
			},
			gibibit: {
				get: function () {
					return this.mebibit / 1024
				},
				set: function (params) {
					this.mebibit = params * 1024
				}
			},
			// bit * 1024 --- End
			// byte * 1000 --- Start
			kilobyte: {
				get: function () {
					return this.byte / 1000
				},
				set: function (params) {
					this.byte = params * 1000
				}
			},
			megabyte: {
				get: function () {
					return this.kilobyte / 1000
				},
				set: function (params) {
					this.kilobyte = params * 1000
				}
			},
			gigabyte: {
				get: function () {
					return this.megabyte / 1000
				},
				set: function (params) {
					this.megabyte = params * 1000
				}
			},
			// byte * 1000 --- End
			// bit * 1000 --- Start
			kilobit: {
				get: function () {
					return this.bit / 1000
				},
				set: function (params) {
					this.bit = params * 1000
				}
			},
			megabit: {
				get: function () {
					return this.kilobit / 1000
				},
				set: function (params) {
					this.kilobit = params * 1000
				}
			},
			gigabit: {
				get: function () {
					return this.megabit / 1000
				},
				set: function (params) {
					this.megabit = params * 1000
				}
			}
			// bit * 1000 --- End
		}
	})

</script>
<style>
	input {
		width: 11.5em;
		margin-right: 0.3em;
		text-align: right
	}

	.outer-center-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.inter-center-wrapper {
		display: table;
	}

	table.calculator {
		display: table-cell;
		border: 1px solid #ddd;
		text-align: left;
		border-collapse: collapse;
		width: auto;
	}

	table.calculator>tr>th,
	table.calculator>tr>td,
	table.calculator>*>tr>th,
	table.calculator>*>tr>td {
		border: 1px solid #ddd;
		text-align: left;
		width: 1%;
		white-space: nowrap;
		padding: 5px;
	}

	table.calculator>tr>th,
	table.calculator>*>tr>th {
		text-align: center
	}

	table.wikitable {
		page-break-inside: avoid;
		margin: 1em 0;
		background-color: #f8f9fa;
		border: 1px solid #a2a9b1;
		border-collapse: collapse;
		color: #000
	}

	table.wikitable>tr>th,
	table.wikitable>tr>td,
	table.wikitable>*>tr>th,
	table.wikitable>*>tr>td {
		border: 1px solid #a2a9b1;
		padding: 0.2em 0.4em
	}

	table.wikitable>tr>th,
	table.wikitable>*>tr>th {
		background-color: #eaecf0;
		text-align: center
	}

	table.wikitable>caption {
		font-weight: bold
	}
</style>