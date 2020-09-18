<template>
  <div>
    <j-collapse :selected.sync="selectedTab" single>
      <j-collapse-item name="1" title="标题 1">collapse 内容 1</j-collapse-item>
      <j-collapse-item name="2" title="标题 2">collapse 内容 2</j-collapse-item>
      <j-collapse-item name="3" title="标题 3">collapse 内容 3</j-collapse-item>
    </j-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src/collapse/collapse-item'
  export default {
    components:{
      'j-collapse': Collapse,
      'j-collapse-item': CollapseItem
    },
    data(){
      return {
        selectedTab:['1']
      }
    }
  }
</script>

<style scoped>

</style>
