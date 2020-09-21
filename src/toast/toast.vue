<template>
  <div class="j-toast" :class="toastClasses">
    <div class="j-toast-content" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JToast",
    props:{
      autoClose:{
        type: [Boolean, Number],
        default: 5,
        validator: function (value) {
          return value === false || typeof value === 'number';
        }
      },
      closeButton:{
        type: Object,
        default: () => ({
          text: '关闭',
          callback: undefined
        })
      },
      enableHtml:{
        type: Boolean,
        default: false
      },
      position:{
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','middle'].indexOf(value) >=0
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    computed:{
      toastClasses(){
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods:{
      execAutoClose(){
        if(this.autoClose){
          setTimeout(()=>{
            this.close()
          },this.autoClose*1000)
        }
      },
      updateStyles(){
        this.$nextTick(() => {
          if(this.$refs.line){
            this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
          }
        })
      },
      close(){
        this.$el.remove() // destroy并不能把元素从页面中删除，所以需要自己删除
        this.$emit('close')
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
  $toast-min-height: 40px;
  $toast-background: rgb(0,0,0,0.75);
  $animation-delay: 300ms;
  @keyframes slide-up {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1;transform: translateY(0%)}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes slide-down {
    0% {opacity: 0;transform: translateY(-100%)}
    100% {opacity: 1;transform: translateY(0%)}
  }
  .j-toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
      top: 0;
      .j-toast-content{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-delay;
      }
    }
    &.position-middle{
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .j-toast-content{
        animation: fade-in $animation-delay;
      }
    }
    &.position-bottom{
      bottom: 0;
      .j-toast-content{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-delay;
      }
    }
    .j-toast-content {
      font-size: $font-size;
      line-height: 1.8;
      min-height: $toast-min-height;
      display: flex;
      align-items: center;
      background: $toast-background;
      border-radius: 4px;
      color: white;
      padding: 0 16px;
      .message{
        padding: 8px 0;
      }
      .close{
        padding-left: 15px;
        flex-shrink: 0;
        cursor: pointer;
      }
      .line {
        margin-left: 15px;
        border-left: 1px solid #ddd;
        height: 60%;
      }
    }
  }

</style>
