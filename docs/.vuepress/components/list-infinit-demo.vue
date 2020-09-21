<template>
  <j-list
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
    @scroll="onScrollEnd"
  >
    <template #items="{ visibleData }">
      <div
        class="j-item"
        v-for="(item, index) in visibleData"
        :key="item + index"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item }}
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
      for (let i = 1; i < 31; i++) {
        this.originalList.push(1);
      }
    },
    methods:{
      onScrollEnd(){
        for(let i = 1;i < 6; i++){
          this.originalList.push(1)
        }
      }
    }
  };
</script>
<style scoped>
  .j-item {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid seagreen;
  }
</style>
