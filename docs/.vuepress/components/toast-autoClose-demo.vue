<template>
  <div>
    <j-button @click="onClickButton">顶部弹出</j-button>
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
    },
    methods: {
      onClickButton () {
        this.$toast('我会在 3 秒后自动关闭', {
          autoClose: 3
        })
      }
    }
  };
</script>

<style>
  .j-toast {
    z-index: 100 !important;
  }
</style>
