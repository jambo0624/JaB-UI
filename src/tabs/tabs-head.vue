<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JTabsHead",
    inject: ['eventBus'],
    mounted() {
      if(this.eventBus) {
        this.eventBus.$on('update:selected',(item, vm)=>{
          const { width, left } = vm.$el.getBoundingClientRect()
          const parentLeft = vm.$parent.$el.getBoundingClientRect().left
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - parentLeft}px`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: #40a9ff;
  $border-color: #ddd;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all .3s;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
