<template>
  <svg class="j-icon" aria-hidden="true">
    <use :xlink:href='`#j-${name}`'></use>
  </svg>
</template>
<script>
  import '../svg'
  export default {
    name: 'JIcon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .j-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
