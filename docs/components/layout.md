---
title: Layout 布局
---

# 布局

用于布局的容器组件，方便快速搭建页面的基本结构

## 简单布局

#### 浏览

#

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

#### 代码

```html
  <j-layout>
    <j-header style="height: 50px; background:lightgreen;">header</j-header>
    <j-content style="height: 100px; background:seagreen;">content</j-content>
    <j-footer style="height: 50px; background:lightgreen;">footer</j-footer>
  </j-layout>
```

## 内侧边栏

侧边栏可关闭哦

#### 浏览

#

<ClientOnly>
<layout-sider-demo></layout-sider-demo>
</ClientOnly>

#### 代码

```html
  <j-layout style="overflow:hidden;">
    <j-header style="height: 50px; background:lightgreen;">
      header
    </j-header>
    <j-layout>
      <j-sider style="height: 100px; background: darkgreen; width:200px;">
        sider
      </j-sider>
      <j-content style="height: 100px; background:seagreen;">
        content
      </j-content>
    </j-layout>
    <j-footer style="height: 50px; background:lightgreen;">
      footer
    </j-footer>
  </j-layout>
```

## 外侧边栏

#### 浏览

#

<ClientOnly>
<layout-outSider-demo></layout-outSider-demo>
</ClientOnly>

#### 代码

```html
  <j-layout style="overflow:hidden;">
    <j-sider style="width:200px; background: darkgreen;">
      sider
    </j-sider>
    <j-layout>
      <j-header style="height: 50px; background:lightgreen;">
        header
      </j-header>
      <j-content style="height: 100px; background:seagreen;">
        content
      </j-content>
      <j-footer style="height: 50px; background:lightgreen;">
        footer
      </j-footer>
    </j-layout>
  </j-layout>
```
