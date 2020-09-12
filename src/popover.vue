<template>
  <div class="j-popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         v-if="visible" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "JPopover",
    props:{
      position: {
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','left','right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click','hover'].indexOf(value) >= 0;
        }
      }
    },
    data(){
      return {
        visible: false
      }
    },
    mounted() {
      if(this.trigger==='click'){
        this.$refs.popover.addEventListener('click',this.onClick)
      }else {
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    destroyed() {
      if (this.$refs.popover) {
        if (this.trigger === "click") {
          this.$refs.popover.removeEventListener("click", this.onClick);
        } else {
          this.$refs.popover.removeEventListener("mouseenter", this.open);
          this.$refs.popover.removeEventListener("mouseleave", this.close);
        }
      }
    },
    methods:{
      positionContent(){
        const { contentWrapper, triggerWrapper } = this.$refs
        document.body.appendChild(contentWrapper)
        const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
        const { height: contentHeight } = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {left: window.scrollY + left, top: window.scrollY + top},
          bottom: {left: window.scrollY + left, top: window.scrollY + height + top},
          left: {
            left: window.scrollY + left,
            top: window.scrollY + top + (height - contentHeight)/2
          },
          right: {
            left: window.scrollY + left + width,
            top: window.scrollY + top + (height - contentHeight)/2
          }
        }
        contentWrapper.style.left = positions[this.position].left +'px'
        contentWrapper.style.top = positions[this.position].top +'px'
      },
      onClickDocument(event){
        if(this.$refs.popover &&
          (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
        ){ return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))
        ) { return }
        this.close()
      },
      open(){
        this.visible = true
        this.$nextTick(()=>{
          this.positionContent()
          document.addEventListener('click',this.onClickDocument)
        })
      },
      close(){
        this.visible = false
        document.removeEventListener('click',this.onClickDocument)
      },
      onClick(event){
        if(this.$refs.triggerWrapper.contains(event.target)){
          if(this.visible === true){
            this.close()
          }else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .j-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 1px 1px rgba(0,0,0,0.5);
    /* 👇两行可以实现包括小三角形的box-shadow，但是兼容性较差 */
    /*filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));*/
    /*background: #fff;*/
    background: #fff;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,&::after{
        border-top-color: #000;
        top: 100%;
        left: 10px;
      }
      &::after{
        border-top-color: #fff;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before,&::after{
        border-bottom-color: #000;
        bottom: 100%;
        left: 10px;
      }
      &::after{
        border-bottom-color: #fff;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        top: 50%;
        transform: translateY(-50%);
        border-left-color: #000;
        left: 100%;
      }
      &::after{
        border-left-color: #fff;
        left: calc(100% - 1px);
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before,&::after{
        top: 50%;
        transform: translateY(-50%);
        border-right-color: #000;
        right: 100%;
      }
      &::after{
        border-right-color: #fff;
        right: calc(100% - 1px);
      }
    }
  }
  .trigger-wrapper{
    display: inline-block;
  }
</style>
