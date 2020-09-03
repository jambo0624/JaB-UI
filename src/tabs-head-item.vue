<template>
  <div class="tabs-head-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JTabsHeadItem",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String || Number,
        required: true
      }
    },
    data(){
      return {
        active: false
      }
    },
    computed:{
      classes(){
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        this.active = this.name === name
      })
    },
    methods: {
      xxx(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head-item{
    flex-shrink: 0;
    padding: 0 1em;
    &.active {
      background: red;
    }
  }
</style>
