---
title: Button 按钮
---

# 按钮

- 可使用单个按钮
- 按钮可以添加图标，设置图标位置
- 可以以组合形式使用按钮

## 单个按钮

#### 示例

#

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

#### 代码

```html
  <j-button>默认按钮</j-button>
```

## 禁用状态

#### 示例

#

<ClientOnly>
  <button-disabled></button-disabled>
</ClientOnly>

#### 代码

```html
  <j-button disabled>禁用按钮</j-button>
```

## 添加图标

#### 示例

#

<ClientOnly>
  <button-icon></button-icon>
</ClientOnly>

#### 代码

```html
  <j-button icon="setting">设置</j-button>
  <j-button loading>加载中</j-button>
  <j-button loading icon-position="right">加载中</j-button>
```

## 按钮组合

#### 示例

#

<ClientOnly>
  <buttonGroup-demo></buttonGroup-demo>
</ClientOnly>

#### 代码

```html
  <j-button-group>
    <j-button icon="left">上一页</j-button>
    <j-button icon="right" icon-position="right">下一页</j-button>
  </j-button-group>
```
