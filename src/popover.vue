<template>
  <div class="j-popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
      positionContent(){
        document.body.appendChild(this.$refs.contentWrapper)
        let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = window.scrollY + left +'px'
        this.$refs.contentWrapper.style.top = window.scrollY + top +'px'
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
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .j-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid #000;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }
</style>
