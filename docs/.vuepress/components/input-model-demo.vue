<template>
  <div>
    <j-input v-model="value"></j-input>
    <div class="value">value: {{value}}</div>
  </div>
</template>

<script>
  import Input from '../../../src/input/input'
  export default {
    data() {
      return {
        value: '双向绑定'
      }
    },
    components: {
      'j-input': Input
    }
  }
</script>
<style scoped>
  .value {
    margin-top: 5px;
  }
</style>
