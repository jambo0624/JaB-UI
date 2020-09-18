---
title: Grid 栅栏
---

# 栅栏

Grid - 栅栏，最多可分为 24 小格，可设置 gutter 和空白，默认支持响应式布局
:::tip
使用该组件推荐设置，示例已设置
:::

```CSS
* { box-sizing: border-box; }
```

## 基础方法

使用单一分栏创建基础的栅格布局

#### 浏览

#

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

#### 代码

```html
  <div style="color: #fff;">
    <j-row class="demo-row">
      <j-col span="8"><div class="demo-col">8</div></j-col>
      <j-col span="8"><div class="demo-col">8</div></j-col>
      <j-col span="8"><div class="demo-col">8</div></j-col>
    </j-row>
    <j-row class="demo-row">
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
    </j-row>
    <j-row class="demo-row">
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
    </j-row>
  </div>
```

## 分栏间隔

分栏之间存在固定间隔

#### 浏览

#

<ClientOnly>
<grid-demo-gutter></grid-demo-gutter>
</ClientOnly>

#### 代码

```html
  <div style="color: #fff;">
    <j-row class="demo-row" gutter="10">
      <j-col span="8"><div class="demo-col">8</div></j-col>
      <j-col span="8"><div class="demo-col">8</div></j-col>
      <j-col span="8"><div class="demo-col">8</div></j-col>
    </j-row>
    <j-row class="demo-row" gutter="20">
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6"><div class="demo-col">6</div></j-col>
    </j-row>
    <j-row class="demo-row" gutter="40">
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4"><div class="demo-col">4</div></j-col>
    </j-row>
  </div>
```

## 分栏偏移

支持偏移指定的栏数

#### 浏览

#

<ClientOnly>
<grid-demo-offset></grid-demo-offset>
</ClientOnly>

#### 代码

```html
  <div style="color: #fff;">
    <j-row class="demo-row">
      <j-col span="8"><div class="demo-col">8</div></j-col>
      <j-col span="8" offset="8"><div class="demo-col">8</div></j-col>
    </j-row>
    <j-row class="demo-row">
      <j-col span="6"><div class="demo-col">6</div></j-col>
      <j-col span="6" offset="4"><div class="demo-col">6</div></j-col>
      <j-col span="6" offset="2"><div class="demo-col">6</div></j-col>
    </j-row>
    <j-row class="demo-row">
      <j-col span="4"><div class="demo-col">4</div></j-col>
      <j-col span="4" offset="4"><div class="demo-col">4</div></j-col>
      <j-col span="4" offset="2"><div class="demo-col">4</div></j-col>
      <j-col span="4" offset="2"><div class="demo-col">4</div></j-col>
    </j-row>
  </div>
```
