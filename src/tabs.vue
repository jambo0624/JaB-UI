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
        type: Boolean,
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
    created() {
      console.log('this.eventBus')
      console.log(this.eventBus)
      console.log('this')
      console.log(this)
      // this.$emit('update:selected','')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs{}
</style>
