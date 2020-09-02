<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: "JTabsHead",
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus)
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .tabs-head{
    display: flex;
    height: ;
  }
</style>
