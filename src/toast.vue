<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JToast",
    props:{
      autoClose:{
        type: Boolean,
        default: true
      },
      autoCloseDelay:{
        type: Number,
        default: 3
      }
    },
    mounted() {
      setTimeout(()=>{
        this.close()
      },this.autoCloseDelay*1000)
    },
    methods:{
      close(){
        this.$el.remove()
        this.$destroy()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-background: rgb(0,0,0,0.75);
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-background;
    border-radius: 4px;
    color: white;
    padding: 0 16px;
  }
</style>
