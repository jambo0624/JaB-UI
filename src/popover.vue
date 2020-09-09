<template>
  <div class="j-popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JPopover",
    data(){
      return {
        visible: false
      }
    },
    methods:{
      xxx(){
        this.visible = !this.visible
      }
    }
  }
</script>

<style scoped lang="scss">
  .j-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid #000;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }
</style>
