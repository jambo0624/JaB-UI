<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <j-button @click="visible = false" v-if="hasCloseButton">&times;</j-button>
    </div>
  </transition>
</template>
<script>
  import Button from '../../src/button/button'
  export default {
    name: 'JSider',
    props: {
      hasCloseButton:{
        type: Boolean,
        default: false
      }
    },
    components:{
      'j-button': Button
    },
    data(){
      return {
        visible: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .sider{
    position: relative;
    > button{
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>
