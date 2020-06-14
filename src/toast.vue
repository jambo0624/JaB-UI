<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
        default: 5
      },
      closeButton:{
        type: Object,
        default: () => ({
          text: '关闭',
          callback: undefined
        })
      }
    },
    mounted() {
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay*1000)
      }
    },
    methods:{
      close(){
        this.$el.remove() // destroy并不能把元素从页面中删除，所以需要自己删除
        this.$destroy()
      },
      onClickClose(){
        this.close()
        if(this.closeButton.callback && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback()
        }
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
  .close{
    padding-left: 15px;
  }
  .line {
    margin-left: 15px;
    border-left: 1px solid #ddd;
    height: 60%;
  }
</style>
