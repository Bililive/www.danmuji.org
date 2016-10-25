---
title: 弹幕抽奖
auther: 宅急送队长
plugin_author: 宅急送队长
plugin_name: 弹幕抽奖
plugin_desc: 从弹幕中随机抽奖
plugin_version: 1.0
plugin_update: 2016.10.6
plugin_dllink: /zip/Lottery/DMPlugin_Lottery.zip
#plugin_dlnote: 并不需要下载说明
---
## 一个简单到我觉得都不需要说明的小插件

### 界面样子：

![界面样子](/img/Lottery/GUI.png "界面样子")

### 使用流程：

1. 在弹幕姬中右键插件，管理，打开界面
2. 设置是否需要佩戴勋章等设定
3. 启用插件
4. 等待观众刷弹幕
5. 点击“开始抽奖”按钮

### 说明：

- 启用插件后，插件才能记录弹幕
- 抽奖为从最后若干条弹幕中随机抽奖
- 如果有人发送了多条弹幕，有概率抽中多次一个人的不同弹幕
- 同一条弹幕不可能抽中两次

### 插件源码：
按WTFPL协议开源 <del>在下载页贴代码很装逼</del>

#### Main.cs

```csharp
using BilibiliDM_PluginFramework;

namespace DMPlugin_Lottery
{
    public class Main : DMPlugin
    {
        private LotteryWindow w;
        public Main()
        {
            this.PluginName = "随机抽奖";
            this.PluginAuth = "宅急送队长";
            this.PluginCont = "QQXXXXXXXXXX";// 网站上不放自己QQ
            this.PluginDesc = "从弹幕中随机抽奖";
            this.PluginVer = "1.0";
            this.ReceivedDanmaku += Main_ReceivedDanmaku;
            w = new LotteryWindow(this);
        }

        private void Main_ReceivedDanmaku(object sender, ReceivedDanmakuArgs e)
        {
            if(e.Danmaku.MsgType == MsgTypeEnum.Comment)
            {
                w.AddDM(e.Danmaku);
            }
        }

        public override void Admin()
        { w.Show(); w.FocusTopMost(); }

        internal bool isEnable
        { get { return Status; } }
    }
}
```

#### LotteryWindow.xaml.cs

```csharp
using System;
using System.Windows;
using BilibiliDM_PluginFramework;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using System.Windows.Controls;
using System.Threading;

namespace DMPlugin_Lottery
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    internal partial class LotteryWindow : Window
    {
        private const string CRLF = "\r\n";

        private Main m;
        private List<DanmakuModel> list = new List<DanmakuModel>();

        internal LotteryWindow(Main main)
        {
            this.m = main;
            InitializeComponent();
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            e.Cancel = true;
            Hide();
        }

        internal void FocusTopMost()
        {
            Topmost = true;
            Topmost = false;
        }

        internal void AddDM(DanmakuModel danmaku)
        {
            if(IsCheckXZ)
            {
                JObject j = JObject.Parse(danmaku.RawData);
                if(((JArray)j["info"][3]).Count < 2 || j["info"][3][1].ToString() != getXZName)
                { return; }// 不添加到抽奖列表
            }
            lock(list)
            {
                // 如果列表中超量就循环删除
                while(list.Count > getListMaxNum)
                { list.RemoveAt(0); }

                list.Add(danmaku);
            }
        }


        private void Button_Click(object sender, RoutedEventArgs e)
        {
            lock(list)
            {
                int selectNum = getSelectNum;
                if(list.Count < selectNum)
                {
                    output = $"弹幕数量不够，当前只有{list.Count}条弹幕";
                    return;
                }

                Random r = new Random();
                bool vipadmin = (bool)DisplayVipAdmin.IsChecked;
                bool ct = (bool)DisplayCommentText.IsChecked;

                string str = "----====抽奖结果====----";

                for(int i = 0; i < selectNum; i++)
                {
                    DanmakuModel d = list[r.Next(list.Count)];
                    list.Remove(d);

                    if(i > 0)
                    { str += $"{CRLF}-----============-----"; }

                    str += $"{CRLF}第{i + 1}名：『{d.CommentUser}』";

                    if(vipadmin)
                    { str += (d.isVIP ? "，老爷" : "") + (d.isAdmin ? "，房管" : ""); }

                    if(ct)
                    { str += $"{CRLF}弹幕内容：{d.CommentText}"; }
                }

                str += $"{CRLF}-----============-----";
                output = str;
            }
        }

        internal void ClearList()
        { list.Clear(); }

        private string output
        {
            get { return OutputBox.Text; }
            set { OutputBox.Text = value; }
        }

        private bool IsCheckXZ =false;
        private string getXZName = "";
        private int getListMaxNum =30;
        private int getSelectNum { get { return int.Parse(SelectNumComboBox.SelectionBoxItem.ToString()); } }

        private void XZCheck_Click(object sender, RoutedEventArgs e)
        { shit(() => { IsCheckXZ = (bool)(sender as CheckBox).IsChecked; }); }

        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        { shit(() => { getXZName = (sender as TextBox).Text; }); }

        private void ListMaxCountComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        { shit(() => { int.TryParse((sender as ComboBox).SelectionBoxItem.ToString(), out getListMaxNum); }); }

        private void shit(Action a)
        { new Thread(() => { Thread.Sleep(5); Dispatcher.Invoke(a); }).Start(); }
    }
}
```

#### LotteryWindow.xaml

```xml
<Window x:Class="DMPlugin_Lottery.LotteryWindow" x:ClassModifier="internal"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:DMPlugin_Lottery"
        mc:Ignorable="d"
        Title="随机抽奖" Height="350" Width="525"
        Closing="Window_Closing">
    <Grid Margin="10">
        <Grid.RowDefinitions>
            <RowDefinition Height="5"/>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="5*"/>
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="3*"/>
            <ColumnDefinition Width="7*"/>
        </Grid.ColumnDefinitions>

        <Button Margin="5" Grid.Row="1" Click="Button_Click">开始抽奖</Button>
        <StackPanel Grid.Row="1" Grid.Column="1">
            <StackPanel Margin="5"  Orientation="Horizontal">
                <CheckBox IsChecked="False" Click="XZCheck_Click" Margin="3,0">抽奖人需要佩戴一个名为</CheckBox>
                <TextBox MinWidth="35" TextChanged="TextBox_TextChanged"/>
                <TextBlock Margin="3,0">的勋章</TextBlock>
            </StackPanel>
            <StackPanel Margin="5" Orientation="Horizontal">
                <CheckBox IsChecked="True" Margin="3,0" x:Name="DisplayCommentText">抽奖结果显示弹幕内容</CheckBox>
                <CheckBox IsChecked="True" Margin="3,0" x:Name="DisplayVipAdmin">抽奖结果显示是否房管老爷</CheckBox>
            </StackPanel>
            <StackPanel Margin="5" Orientation="Horizontal">
                <TextBlock>从最后</TextBlock>
                <ComboBox Margin="5,0" SelectionChanged="ListMaxCountComboBox_SelectionChanged">
                    <ComboBoxItem>10</ComboBoxItem>
                    <ComboBoxItem>20</ComboBoxItem>
                    <ComboBoxItem IsSelected="True">30</ComboBoxItem>
                    <ComboBoxItem>40</ComboBoxItem>
                    <ComboBoxItem>50</ComboBoxItem>
                    <ComboBoxItem>60</ComboBoxItem>
                    <ComboBoxItem>70</ComboBoxItem>
                    <ComboBoxItem>80</ComboBoxItem>
                    <ComboBoxItem>90</ComboBoxItem>
                    <ComboBoxItem>100</ComboBoxItem>
                </ComboBox>
                <TextBlock>条弹幕中随机抽取</TextBlock>
                <ComboBox x:Name="SelectNumComboBox" Margin="5,0">
                    <ComboBoxItem IsSelected="True">1</ComboBoxItem>
                    <ComboBoxItem>2</ComboBoxItem>
                    <ComboBoxItem>3</ComboBoxItem>
                    <ComboBoxItem>4</ComboBoxItem>
                    <ComboBoxItem>5</ComboBoxItem>
                    <ComboBoxItem>6</ComboBoxItem>
                    <ComboBoxItem>7</ComboBoxItem>
                    <ComboBoxItem>8</ComboBoxItem>
                    <ComboBoxItem>9</ComboBoxItem>
                    <ComboBoxItem>10</ComboBoxItem>
                </ComboBox>
                <TextBlock>条弹幕作为结果</TextBlock>
            </StackPanel>
        </StackPanel>
        <TextBox Grid.ColumnSpan="2" Grid.Row="2"
                 Margin="5" FontSize="15"
                 x:Name="OutputBox"/>
    </Grid>
</Window>

```