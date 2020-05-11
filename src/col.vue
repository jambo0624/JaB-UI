<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'JCol',
    props:{
      span: {
        type: [Number,String]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col{
    height: 100px;
    width: 50%;
    background: grey;
    border: 1px solid red;
    /*flex-shrink: 0;  不缩放，意思是不换行也不压缩*/
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }
  }
</style>
