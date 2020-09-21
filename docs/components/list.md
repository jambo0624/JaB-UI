---
title: List 列表
---

# List

用于渲染大量数据的高性能 List 列表组件，支持无限滚动渲染，添加删除和重排动画 hook 等

## 基础用法

渲染大量数据

#### 示例

#

<ClientOnly>
<list-demo/>
</ClientOnly>

#### 代码

通过 name 为 items 的[插槽 prop](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD) visibleData，
可以获取可视区域列表数据，从而对其进行展示

```html
<j-list
  :originalList="originalList"
  :itemHeight="itemHeight"
  style="width: 500px; height: 600px;"
>
  <template #items="{ visibleData }">
    <div
      class="j-item"
      v-for="item in visibleData"
      :key="item.id"
      :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
    >
      {{ item.value }}
    </div>
  </template>
</j-list>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 30
  }
},
created() {
  for (let i = 1; i < 10000; i++) {
    this.originalList.push({ id: i, value: i });
  }
}
```

## 无限滚动渲染

#### 示例

#

<ClientOnly>
<list-infinit-demo />
</ClientOnly>

#### 代码

```html
<j-list
  :originalList="originalList"
  :itemHeight="itemHeight"
  style="width: 500px; height: 600px;"
  @scroll="onScrollEnd"
>
  <template #items="{ visibleData }">
    <div
      class="j-item"
      v-for="(item, index) in visibleData"
      :key="item + index"
      :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
    >
      {{ item }}
    </div>
  </template>
</j-list>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 30
  }
},
created() {
  for (let i = 1; i < 31; i++) {
    this.originalList.push(1);
  }
},
methods: {
  onScrollEnd() {
    for (let i = 1; i < 6; i++) {
      this.originalList.push(1);
    }
  },
}
```

## 数据变化及动画

:::tip
默认不开启动画，如需要添加动画，需要设置 animation 属性
:::

#### 示例

#

<ClientOnly>
<list-callbackAndAnimation-demo />
</ClientOnly>

#### 代码

```html
<div>
  <j-button @click="addList" style="margin-bottom: 10px;">添加</j-button>
  <j-button @click="shuffleList" style="margin-bottom: 10px;">重排</j-button>
  <j-list
    animation
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
    @added="onAdd"
    @removed="onRemove"
    @changed="onChange"
  >
    <template #items="{ visibleData }">
      <div
        class="item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item.value }}
        <j-button @click="removeItem(item.id)">删除</j-button>
      </div>
    </template>
  </j-list>
</div>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 50,
    i: 0,
  };
},
created() {
  for (let i = 1; i < 31; i++) {
    this.originalList.push({ id: i, value: i });
    this.i = i;
  }
},
methods: {
  addList() {
    this.i++;
    this.originalList.unshift({ id: this.i, value: this.i });
  },
  removeItem(id) {
    this.originalList.splice(
      this.originalList.findIndex((item) => id === item.id),
      1
    );
  },
  shuffleList() {
    const shuffled = [];
    while (this.originalList.length > 0) {
      const index = this.random(this.originalList.length - 1);
      shuffled.push(this.originalList[index]);
      this.originalList.splice(index, 1);
    }
    this.originalList = shuffled;
  },
  random(max) {
    return Math.floor(Math.random() * (max + 1));
  },
  onAdd() {
    this.$toast("添加成功", {
      autoClose: 3,
    });
  },
  onRemove() {
    this.$toast("删除成功", {
      autoClose: 3,
    });
  },
  onChange() {
    this.$toast("重排成功", {
      autoClose: 3,
    });
  },
},
```

---

### 参数

| 参数                | 说明                                                 | 类型          | 默认值 |
| ------------------- | --------------------------------------------------- | ------------- | ------ |
| originalList        | 包含大量数据的列表                                     | array         | []     |
| itemHeight          | 行高度，静态高度可以直接写入像素值                        | number | 80     |
| reversed            | 展示列表上下视区上、下额外展示的 dom 节点数量预留项          | number        | 5      |
| animation           | 是否开启动画（仅在使用钩子时有效）                        | Boolean       | false  |

### Lost Slot

| name  | 返回参数    | 说明                   | 类型                        |
| ----- | ----------- | ---------------------- | --------------------------- |
| items | visibleData | 当前需要展示的列表内容, 如[{id: 1, value: 1}] | array |

### Hooks

| 方法名  | 说明                                                          | 类型 |
| ------- | ------------------------------------------------------------- | ---- |
| scroll  | 列表滚动到底触发                                              | -    |
| added   | 新增列表项触发，可配合 animation 使用                         | -    |
| removed | 列表项删除触发，可配合 animation 使用                         | -    |
| changed | 列表项变化触发（上述两个操作也会触发），可配合 animation 使用 | -    |
