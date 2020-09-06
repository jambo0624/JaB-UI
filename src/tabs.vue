<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "JTabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      if(this.$children.length===0){
        console && console.warn &&
        console.warn('tabs的子组件必须是tabs-head和tabs-body')
      }
      this.$children.forEach(vm=>{
        if(vm.$options.name === 'JTabsHead'){
          vm.$children.forEach(childVm=>{
            if(childVm.$options.name === 'JTabsHeadItem'
              && childVm.name === this.selected){
              this.eventBus && this.eventBus.$emit('update:selected',this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs{}
</style>
