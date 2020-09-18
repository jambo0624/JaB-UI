---
title: Collapse 折叠面板
---

# 折叠面板

可以折叠/展开的内容区域

## 默认可打开多个

可同时展开多个面板，面板之间不影响

#### 示例

#

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

#

#### 代码

```js
data() {
  return {
    selectedTab: ['1', '2', '3']
  }
}
```

```html
  <j-collapse :selected.sync="selectedTab">
    <j-collapse-item name="1" title="标题 1">collapse 内容 1</j-collapse-item>
    <j-collapse-item name="2" title="标题 2">collapse 内容 2</j-collapse-item>
    <j-collapse-item name="3" title="标题 3">collapse 内容 3</j-collapse-item>
  </j-collapse>
```

## 手风琴效果

每次只能展开一个面板，就像手风琴一样

#### 示例

#

<ClientOnly>
<collapse-demo-single></collapse-demo-single>
</ClientOnly>

#### 代码

```js
data() {
    return {
        selectedTab: ['1']
    }
}
```

```html
  <j-collapse :selected.sync="selectedTab" single>
    <j-collapse-item name="1" title="标题 1">collapse 内容 1</j-collapse-item>
    <j-collapse-item name="2" title="标题 2">collapse 内容 2</j-collapse-item>
    <j-collapse-item name="3" title="标题 3">collapse 内容 3</j-collapse-item>
  </j-collapse>
```


