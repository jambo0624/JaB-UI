<template>
  <div class="j-popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
      xxx(){
        this.visible = !this.visible
        if(this.visible){
          this.$nextTick(()=>{
            document.body.appendChild(this.$refs.contentWrapper)
            let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+'px'
            this.$refs.contentWrapper.style.top = top+'px'
            let changeVisible = ()=>{
              this.visible = false
              document.removeEventListener('click',changeVisible)
            }
            document.addEventListener('click',changeVisible)
          })
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
