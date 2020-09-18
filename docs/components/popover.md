---
title: Popover 弹出层
---

# 弹出层

支持点击和 hover 两种方式触发

:::tip
popover 弹出层内容支持 html, 如内容外添加 `<strong></strong>` 
:::

## 点击

#### 示例

#

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

#### 代码

```html
  <j-popover>
    <j-button border>上方弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="bottom">
    <j-button border>下方弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="left">
    <j-button border>左边弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="right">
    <j-button border>右边弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
```

## hover

#### 示例

#

<ClientOnly>
<popover-hover-demo></popover-hover-demo>
</ClientOnly>

#### 代码

```html
  <j-popover trigger="hover">
    <j-button>上方弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="bottom" trigger="hover">
    <j-button>下方弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="left" trigger="hover">
    <j-button>左边弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
  <j-popover position="right" trigger="hover">
    <j-button>右边弹出</j-button>
    <template slot="content">弹出内容</template>
  </j-popover>
```

### 嵌套操作

你可以嵌套操作，在弹出层作进一步交互

#### 示例

#

<ClientOnly>
<popover-close-demo></popover-close-demo>
</ClientOnly>

#### 代码

```html
  <j-popover>
    <template slot="content" slot-scope="{close}">
      弹出内容
      <j-button @click="close">关闭</j-button>
    </template>
    <j-button>内部关闭</j-button>
  </j-popover>
```
