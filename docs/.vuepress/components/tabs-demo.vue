<template>
  <div>
    <j-tabs :selected="selected">
      <j-tabs-head>
        <j-tabs-item name="1">标题一</j-tabs-item>
        <j-tabs-item name="2">标题二</j-tabs-item>
        <j-tabs-item name="3">标题三</j-tabs-item>
        <j-tabs-item name="4">标题四</j-tabs-item>
        <j-tabs-item name="5" disabled>标题五</j-tabs-item>
      </j-tabs-head>
      <j-tabs-body>
        <j-tabs-pane name="1">内容一</j-tabs-pane>
        <j-tabs-pane name="2">内容二</j-tabs-pane>
        <j-tabs-pane name="3">内容三</j-tabs-pane>
        <j-tabs-pane name="4">内容四</j-tabs-pane>
      </j-tabs-body>
    </j-tabs>
  </div>
</template>

<script>
  import Tabs from "../../../src/tabs/tabs";
  import TabsHead from "../../../src/tabs/tabs-head";
  import TabsBody from "../../../src/tabs/tabs-body";
  import TabsItem from "../../../src/tabs/tabs-head-item";
  import TabsPane from "../../../src/tabs/tabs-body-pane";
  export default {
    components: {
      "j-tabs": Tabs,
      "j-tabs-head": TabsHead,
      "j-tabs-body": TabsBody,
      "j-tabs-item": TabsItem,
      "j-tabs-pane": TabsPane
    },
    data() {
      return {
        selected: "1"
      };
    }
  };
</script>
