<template>
  <div class="j-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "JCollapse",
    props:{
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    data() {
      return {
        eventBus: new Vue(),
      }
    },
    mounted() {
      if(this.single && this.selected.length>1){
        console && console.warn && console.warn('single 值为 true 时，只能默认选中一个')
        this.selected.splice(1)
      }
      this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('update:addSelected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if(this.single){
          selectedCopy = [name]
        }else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected',selectedCopy)
        this.$emit('update:selected',selectedCopy)
      })
      this.eventBus.$on('update:removeSelected',(name)=>{
        var index = this.selected.indexOf(name)
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        selectedCopy.splice(index,1)
        this.eventBus.$emit('update:selected',selectedCopy)
        this.$emit('update:selected',selectedCopy)
      })
    }
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .j-collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
