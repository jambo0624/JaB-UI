---
title: 快速上手
---

# 快速上手

## 安装

参考 [安装](/install/) 章节

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```CSS
*，*::before,*::after{ box-sizing: border-box }
```

IE 8 及以上浏览器支持此样式。

## 引入 JaB-UI

```js
import { Button } from "jab-ui";
import "jab-ui/dist/index.css";

export default {
  name: "app",
  components: {
    "j-button": Button
  }
};
```
