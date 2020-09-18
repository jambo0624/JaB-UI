<template>
  <div>
    <div style="color: #fff;">
      <j-row class="demo-row">
        <j-col span="8"><div class="demo-col">8</div></j-col>
        <j-col span="8" offset="8"><div class="demo-col">8</div></j-col>
      </j-row>
      <j-row class="demo-row">
        <j-col span="6"><div class="demo-col">6</div></j-col>
        <j-col span="6" offset="4"><div class="demo-col">6</div></j-col>
        <j-col span="6" offset="2"><div class="demo-col">6</div></j-col>
      </j-row>
      <j-row class="demo-row">
        <j-col span="4"><div class="demo-col">4</div></j-col>
        <j-col span="4" offset="4"><div class="demo-col">4</div></j-col>
        <j-col span="4" offset="2"><div class="demo-col">4</div></j-col>
        <j-col span="4" offset="2"><div class="demo-col">4</div></j-col>
      </j-row>
    </div>
  </div>
</template>

<script>
  import Col from '../../../src/grid/col'
  import Row from '../../../src/grid/row'
  export default {
    components:{
      'j-col': Col,
      'j-row': Row
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demo-row {
    margin: 5px 0;
  }
  .demo-col {
    border: 1px solid #ebeef5;
    background: #42b983;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
