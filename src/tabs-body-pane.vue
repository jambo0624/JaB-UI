<template>
  <div class="tabs-body-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JTabsBodyPane",
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-body-pane{}
</style>
