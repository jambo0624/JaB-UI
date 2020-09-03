<template>
  <div class="tabs-body-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JTabsBodyPane",
    inject: ['eventBus'],
    props:{
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
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-body-pane{
    &.active {
      background: yellow;
    }
  }
</style>
