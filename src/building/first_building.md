---
title: 首次启动
icon: object-group
order: 1
category:
  - 指南
tag:
  - 首次启动
  - Vanilla
---
此篇讲解一个最最基础的服务器是怎么诞生的
<!-- more -->

## 选择JAVA
首先，你需要确定你所使用版本的最低Java环境要求  
这里有一个非常准确的判断方法，当然最快的方法还是去网上搜索  
毕竟没人会喜欢自己的服务器环境里面一堆Java还不知道该删哪个吧  

进入 [中文 Minecraft Wiki](https://zh.minecraft.wiki/) 并在右上方的搜索栏中搜索你当前需要启动的服务端版本  
比如我这里使用 `1.20.4` ，那么我就可以搜索 `Java版1.20.4`  

![中文 Minecraft Wiki](https://pic.imgdb.cn/item/65bca6c7871b83018a023582.png)

进入页面后，在右侧的简介中往回翻版本，直到在更新条目中找到 `现在启动游戏要求的最低Java版本为xx` 等字样即可  
::: tip

一般会在 更改 > 常规 中提到

:::

比如我翻到了 `1.18` 版本，此处提到了 `现在启动游戏要求的最低Java版本为17` 于是我需要在后续过程中使用 `Java 17+` 的版本  

接下来就需要寻找Java下载
百度搜索 JAVA 17 下载，这里我们以位于 oracle 上的Java 17为例
进入 [用于 windows 的 JAVA 17](https://www.oracle.com/cn/java/technologies/downloads/#jdk17-windows) 下载界面，选择一个最适合你的下载方式进行下载，如果是安装程序无脑下一项即可  

![位于 oracle 上的下载界面](https://pic.imgdb.cn/item/65bca575871b83018afd8454.png)

最后，打开cmd，输入 `java -version` 查看当前JAVA版本  
或者，打开cmd，输入 `<java所在路径> -version` 查看对应JAVA版本，如图  

![<java所在路径> -version 的输出结果](https://pic.imgdb.cn/item/65bca470871b83018afa0751.png)
*注意，输出文本可能不一样，但是一定表明了当前版本*  

## 下载服务器启动程序
java运行环境配置好后，你需要前往Minecraft官网下载最新服务端  

![位于Minecraft官网的服务端下载地址](https://pic.imgdb.cn/item/65bca771871b83018a04a723.png)

当然你也有可能并不想使用最新服务端，此时你只需要前往
