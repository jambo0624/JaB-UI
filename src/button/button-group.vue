<template>
  <div class="j-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'JButtonGroup',
    mounted(){
      for (let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name!=='button'){
          console.warn(`j-button-group 的子组件应该全是 j-button，但是你写的是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-radius: 4px;
.j-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .j-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>
