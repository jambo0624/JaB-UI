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
  };
</script>

<style>
  .j-wrapper {
    z-index: 100 !important;
  }
</style>
