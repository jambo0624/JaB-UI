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
        type: String
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected)
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
