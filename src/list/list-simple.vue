<template>
  <div ref="listContainer" class="j-list-container" @scroll="onScroll">
    <div class="j-list-phantom" :style="{ height: originalListHeight + 'px'}"></div>
    <div class="j-list" :style="{ transform: 'translateY('+ getTransform +'px)'}">
      <transition-group>
        <slot name="items" :visibleData="visibleData"></slot>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JList",
    props: {
      /* 列表数据 */
      originalList: {
        type: Array,
        default: () => [],
      },
      /* 行高 */
      itemHeight: {
        type: Number,
        default: 80
      },
    },
    computed: {
      /* 计算 j-phantom 的高度，决定可滚动的高 */
      originalListHeight(){
        return this.originalLength * this.itemHeight
      },
      /* 计算可视区域的数据条目，决定最后一条展示数据的 index */
      visibleCount(){
        return Math.ceil(this.screenHeight / this.itemHeight)
      },
      /* 获取滚动高度的整值，list 要向下移动此距离，使得展示区域始终在容器内 */
      getTransform() {
        return this.scrollTop - (this.scrollTop % this.itemHeight)
      },
      /* 根据 index 变化，截取展示区域数据 */
      visibleData(){
        return this.originalList.slice(
          Math.max(this.start,0),
          Math.min(this.end,this.originalLength)
        )
      }
    },
    data() {
      return {
        /* 可视数据起始值 */
        start: 0,
        /* 可视数据结尾值 */
        end: 0,
        /* 可视区域高度 */
        screenHeight: 0,
        /* 滚动高度 */
        scrollTop: 0,
        /* phantom 高度，即可滚动高 */
        originalLength: 0
      };
    },
    created() {
      this.start = 0
      this.originalLength = this.originalList.length
    },
    mounted() {
      this.screenHeight = this.$el.clientHeight
      this.end = this.start + this.visibleCount
    },
    methods: {
      onScroll(){
        this.scrollTop = this.$refs.listContainer.scrollTop
        this.start = Math.floor(this.scrollTop / this.itemHeight)
        this.end = this.start + this.visibleCount
      }
    },
  };
</script>

<style lang="scss" scoped>
  .j-list-container {
    height: 100%;
    overflow: auto;
    position: relative;

    .j-list-phantom {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    .j-list {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
</style>

<!-- 这个组件是实现的基础的滚动列表组件，下面是使用方法 -->
<!--<template>-->
<!--  <j-list-->
<!--    :originalList="originalList"-->
<!--    :itemHeight="itemHeight"-->
<!--    style="width: 500px; height: 600px;"-->
<!--  >-->
<!--    <template #items="{ visibleData }">-->
<!--      <div-->
<!--        class="j-item"-->
<!--        v-for="item in visibleData"-->
<!--        :key="item.id"-->
<!--        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"-->
<!--      >-->
<!--        {{ item.value }}-->
<!--      </div>-->
<!--    </template>-->
<!--  </j-list>-->
<!--</template>-->

<!--<script>-->
<!--  import List from "../../../src/list/list";-->

<!--  export default {-->
<!--    components: {-->
<!--      "j-list": List,-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        originalList: [],-->
<!--        itemHeight: 30,-->
<!--      };-->
<!--    },-->
<!--    created() {-->
<!--      for (let i = 1; i < 1000; i++) {-->
<!--        this.originalList.push({ id: i, value: i });-->
<!--      }-->
<!--    },-->
<!--  };-->
<!--</script>-->

<!--<style scoped>-->
<!--  .j-item {-->
<!--    text-align: center;-->
<!--    box-sizing: border-box;-->
<!--    border: 1px solid seagreen;-->
<!--  }-->
<!--</style>-->
