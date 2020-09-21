---
title: Toast 吐司弹出
---

# Toast

常用于主动操作后的反馈提示，

:::tip
使用时请确保组件有足够高的层级 (z-index)
:::

```CSS
.j-toast {
    z-index: 100;
}
```

## 设置弹出位置

#### 示例

#

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

#### 代码

```html
<div>
  <j-button @click="$toast('点击弹出提示')" border>顶部弹出</j-button>
  <j-button @click="$toast('点击弹出提示', {position:'middle'})" border>
    中间弹出
  </j-button>
  <j-button @click="$toast('点击弹出提示', {position:'bottom'})" border>
    底部弹出
  </j-button>
</div>
```

## 自动关闭

#### 示例

#

<ClientOnly>
<toast-autoClose-demo></toast-autoClose-demo>
</ClientOnly>

#### 代码

```js
methods: {
  onClickButton () {
    this.$toast('我会在 3 秒后自动关闭', {
      autoClose: 3,
    })
  }
}
```

```html
  <j-button @click="onClickButton">顶部弹出</j-button>
```

:::tip
autoClose 取值为 false (手动关闭)或数字(默认为 5)
:::

## 关闭按钮回调

#### 示例

#

<ClientOnly>
<toast-callback-demo></toast-callback-demo>
</ClientOnly>

#### 代码

```js
methods: {
  onClickButton () {
    this.$toast('收到请回复', {
      closeButton: {
        text: '知道了',
        callback: () => {
         console.log('他回复说收到了')
        }
      }
    })
  }
}
```

```html
  <j-button @click="onClickButton">顶部弹出</j-button>
```
