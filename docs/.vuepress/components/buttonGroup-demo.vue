<template>
  <div>
    <j-button-group>
      <j-button icon="left">上一页</j-button>
      <j-button icon="right" icon-position="right">下一页</j-button>
    </j-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    name: "buttonGroup-demo",
    components:{
      'j-button': Button,
      'j-button-group': ButtonGroup
    }
  }
</script>

<style scoped>

</style>
