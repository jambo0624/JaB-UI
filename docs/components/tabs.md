---
title: Tabs 标签页
---

# 标签页

选项卡切换组件，提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 使用方法

#### 示例

#

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

#### 代码

```js
  data() {
    return {
      selected: "1"
    };
  }
```

```html
  <j-tabs :selected="selected">
    <j-tabs-head>
      <j-tabs-item name="1">标题一</j-tabs-item>
      <j-tabs-item name="2">标题二</j-tabs-item>
      <j-tabs-item name="3">标题三</j-tabs-item>
      <j-tabs-item name="4">标题四</j-tabs-item>
      <j-tabs-item name="5" disabled>标题五</j-tabs-item>
    </j-tabs-head>
    <j-tabs-body>
      <j-tabs-pane name="1">内容一</j-tabs-pane>
      <j-tabs-pane name="2">内容二</j-tabs-pane>
      <j-tabs-pane name="3">内容三</j-tabs-pane>
      <j-tabs-pane name="4">内容四</j-tabs-pane>
    </j-tabs-body>
  </j-tabs>
```

::: tip
j-tabs-item 与 j-tabs-pane 的 name 需对应；   
在 j-tabs-item 设置 disabled 可以让其为不可用状态。
:::
