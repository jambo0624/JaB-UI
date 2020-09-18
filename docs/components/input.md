---
title: Input 输入框
---

# 输入框

通过鼠标或键盘输入字符

## 常用例子

#### 示例

#

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

#### 代码

```html
<j-input value="中文" title='中文'></j-input>
<j-input value="中文" readonly></j-input>
<j-input value="中文" disabled></j-input>
<j-input value="中文" error="错误"></j-input>
```

## 支持双向绑定

利用 vue 提供的语法糖，支持双向绑定

#### 示例

#

<ClientOnly>
<input-model-demo></input-model-demo>
</ClientOnly>

#### 代码

```js
data() {
  return {
    value: '双向绑定'
  }
}
```

```html
<j-input v-model="value"></j-input>
<div> value: {{value}} </div>
```
