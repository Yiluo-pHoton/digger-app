# Ruff Application

这个应用部署到 ruff 上之后，打开浏览器，输入地址 http://192.168.78.1:6318, 就能看到一个控制挖掘机的页面，

左边四个按钮控制挖掘机前、后、左、右，右边两个按钮控制挖掘机上半身左转、右转，中间的蓝色按钮控制挖掘机开始挖掘。

所有的按钮按住不放会产生动作，松开即停止

## PC, Table, Phone 适配问题

在 views/index.html 中

由于要支持鼠标点击和触摸两种事件，所以有 onmousedown 和 ontouchstart 等注册事件， ontouchstart 等 touch 相关的事件使用了 thumbs 这个库

同时为了防止触摸长按导致浏览器默认的右键事件，把 oncontextmenu 一直设成 false 来阻止这个默认事件

## 关于 Ruff 上 Home 包的问题

由于 Home 不支持 Host JS 静态文件，所以我把 app.js 和 thumbs.0.6.0.min.js 的后缀改成了 .css,  比较 tricky 的做法.

## Digger反应不稳定的问题 ##

在鼠标按下之后，console中时常会在同一时间点记录下连续的指令，如
```
stop diggering
stop diggering
start diggering
```
```
start diggering
start diggering
stop diggering
stop diggering
```
`start`后并不固定搭配`stop`导致指令持续进行，在每个指令前加`status`防止同一`start`类重复出现即可
