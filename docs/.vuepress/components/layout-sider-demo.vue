<template>
  <div>
    <j-layout style="overflow:hidden;">
      <j-header class="j-demo" style="height: 50px; background:lightgreen;">
        header
      </j-header>
      <j-layout>
        <j-sider hasCloseButton class="j-demo" style="height: 100px; background: darkgreen; width:200px;">
          sider
        </j-sider>
        <j-content class="j-demo" style="height: 100px; background:seagreen;">
          content
        </j-content>
      </j-layout>
      <j-footer class="j-demo" style="height: 50px; background:lightgreen;">
        footer
      </j-footer>
    </j-layout>
  </div>
</template>

<script>
  import Layout from "../../../src/layout/layout";
  import Header from "../../../src/layout/header";
  import Footer from "../../../src/layout/footer";
  import Content from "../../../src/layout/content";
  import Sider from "../../../src/layout/sider";

  export default {
    components: {
      "j-layout": Layout,
      "j-header": Header,
      "j-footer": Footer,
      "j-content": Content,
      "j-sider": Sider
    }
  };
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .j-demo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
