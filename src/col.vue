<template>
  <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'JCol',
    props:{
      span: {
        type: [Number,String]
      },
      offset: {
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
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    }
  }
</style>
