<template>
  <div>
    <j-button @click="$toast('点击弹出提示')">顶部弹出</j-button>
    <j-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</j-button>
    <j-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</j-button>
  </div>
</template>

<script>
  import Vue from "vue";
  import Toast from "../../../src/toast/toast";
  import Button from "../../../src/button/button";
  import plugin from "../../../src/toast/plugin";
  Vue.use(plugin);
  export default {
    components: {
      "j-toast": Toast,
      "j-button": Button
    }
  };
</script>

<style>
  .j-wrapper {
    z-index: 100 !important;
  }
</style>
