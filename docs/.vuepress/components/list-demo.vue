<template>
  <j-list
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
  >
    <template #items="{ visibleData }">
      <div
        class="j-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item.value }}
      </div>
    </template>
  </j-list>
</template>

<script>
  import List from "../../../src/list/list";

  export default {
    components: {
      "j-list": List,
    },
    data() {
      return {
        originalList: [],
        itemHeight: 30,
      };
    },
    created() {
      for (let i = 1; i < 1000; i++) {
        this.originalList.push({ id: i, value: i });
      }
    },
  };
</script>
<style scoped>
  .j-item {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid seagreen;
  }
</style>
