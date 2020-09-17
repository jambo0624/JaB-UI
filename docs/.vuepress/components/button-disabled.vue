<template>
  <div>
    <j-button disabled>禁用按钮</j-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    name: "button-disabled",
    components:{
      'j-button': Button
    }
  }
</script>

<style scoped>

</style>
