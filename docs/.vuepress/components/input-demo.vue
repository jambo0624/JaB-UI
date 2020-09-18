<template>
  <div>
    <j-input value="中文" title='中文'></j-input>
    <j-input value="中文" readonly></j-input>
    <j-input value="中文" disabled></j-input>
    <j-input value="中文" error="错误"></j-input>
  </div>
</template>

<script>
  import Input from '../../../src/input/input'
  export default {
    components: {
      'j-input': Input
    }
  }
</script>
