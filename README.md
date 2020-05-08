# 一个基于 vue 的UI 框架
[![Build Status](https://travis-ci.org/jambo0624/JaB-UI.svg?branch=master)](https://travis-ci.org/jambo0624/JaB-UI)

 作者：Jambo

## 介绍

这是我试图更进一步提高自己的vue技能，制作的一个UI框架。

## 开始使用

1. 引入CSS样式

安装本框架前，请在css中开启border-box
``` css
*,*::before,*::after{ box-sizing: border-box;}
```
IE8及以上都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
``` css
  html {
    --font-size: 14px;
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    --border-radius: 4px;
  }
```
IE15 以上支持此样式

2. 安装jab-ui
` npm i --save jab-ui`

3. 引入jab-ui
``` js
  import {Button, ButtonGroup, Icon} from 'jab-ui'
  import 'jab-ui/dist/index.css'
  export default {
    name: 'app',
    components: {
      'j-button': Button,
      'j-icon': Icon
    }
  }
```

## 文档
## 提问
## 变更记录
## 联系方式
