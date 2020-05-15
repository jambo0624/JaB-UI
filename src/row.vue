<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'JRow',
    props:{
      gutter:{
        type: [Number,String],
        default: 0
      },
      align:{
        type: String,
        validate(value){
          return ['left','center','right'].includes(value)
        }
      }
    },
    computed:{
      rowStyle(){
        let {gutter} = this
        return {
          marginLeft: -gutter/2+'px',
          marginRight: -gutter/2+'px'
        }
      },
      rowClass(){
        let {align} = this
        return [align&&`align-${align}`]
      }
    },
    mounted() {
      this.$children.forEach(item=>{
        item.gutter = this.gutter
      })
    }
  }
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
    flex-wrap: nowrap; /*flex默认属性*/
    &.align-left{
      justify-content: flex-start;
    }
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>
