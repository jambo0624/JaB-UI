<template>
  <div>
    <j-popover trigger="hover">
      <j-button>上方弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="bottom" trigger="hover">
      <j-button>下方弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="left" trigger="hover">
      <j-button>左边弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="right" trigger="hover">
      <j-button>右边弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
  </div>
</template>

<script>
  import Popover from "../../../src/popover/popover";
  import Button from "../../../src/button/button";
  export default {
    components: {
      "j-popover": Popover,
      "j-button": Button
    }
  };
</script>
