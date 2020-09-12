<template>
  <div class="j-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JCollapse"
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
