<template>
  <div>
    <j-popover>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <j-button @click="close">关闭</j-button>
      </template>
      <j-button>内部关闭</j-button>
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
