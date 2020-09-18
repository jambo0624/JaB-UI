<template>
  <div>
    <j-button icon="setting">设置</j-button>
    <j-button loading>加载中</j-button>
    <j-button loading icon-position="right">加载中</j-button>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  export default {
    name: "button-icon",
    components:{
      'j-button': Button
    }
  }
</script>

<style scoped>

</style>
