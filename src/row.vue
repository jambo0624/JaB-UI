<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'JRow'
  }
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
    flex-wrap: nowrap; /*flex默认属性*/
  }
</style>
