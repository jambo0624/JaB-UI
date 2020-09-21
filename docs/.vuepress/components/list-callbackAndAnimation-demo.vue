<template>
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
          class="j-item"
          v-for="item in visibleData"
          :key="item.id"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        >
          {{ item.value }}
          <j-button class="delete-button" @click="removeItem(item.id)">删除</j-button>
        </div>
      </template>
    </j-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/toast/toast'
  import plugin from '../../../src/toast/plugin'
  import List from "../../../src/list/list";
  import Button from '../../../src/button/button'
  Vue.use(plugin)
  export default {
    components: {
      "j-list": List,
      "j-button": Button,
      "j-toast": Toast
    },
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
  };
</script>

<style>
  .j-toast {
    z-index: 100;
  }
  .j-item {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid seagreen;
    position: relative;
  }
  .delete-button {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
