<template>
  <svg class="j-icon" aria-hidden="true">
    <use :xlink:href='`#j-${name}`'></use>
  </svg>
</template>
<script>
  export default {
    props: ['name']
  }
</script>
<style lang="scss">
  .j-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
