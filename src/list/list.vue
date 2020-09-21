<template>
  <div ref="listContainer" class="j-list-container" @scroll="onScroll">
    <div class="j-list-phantom" :style="{ height: originalListHeight + 'px'}"></div>
    <div class="j-list" :style="{ transform: 'translateY('+ getTransform +'px)'}">
      <transition-group :name="listName">
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
        default: () => []
      },
      /* 行高 */
      itemHeight: {
        type: Number,
        default: 80
      },
      /* 上下预留项 */
      reversed: {
        type: Number,
        default: 5
      },
      /* 是否开启动画 */
      animation: {
        type:Boolean,
        default: false
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
        originalLength: 0,
        /* 列表名称（用于动画） */
        listName: '',

      };
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
    watch:{
      originalList(val){
        if(val){
          this.animation && (this.listName = 'j-list')
          this.$emit('changed')
          if(val.length === this.originalLength -1){
            this.$emit('removed')
          }else if(val.length > this.originalLength){
            this.$emit('added')
          }
          this.originalLength = this.originalList.length
        }
      }
    },
    created() {
      this.start = 0
      this.originalLength = this.originalList.length
    },
    mounted() {
      this.screenHeight = this.$el.clientHeight
      this.end = this.start + this.visibleCount + this.reversed
    },
    methods: {
      onScroll(){
        this.scrollTop = this.$refs.listContainer.scrollTop
        this.start = Math.floor(this.scrollTop / this.itemHeight)
        this.end = this.start + this.visibleCount + this.reversed
        this.end === this.originalLength && this.$emit('scroll')
      },
      onTransitionEnd(){
        this.listName = ''
      }
    },
  };
</script>

<style lang="scss">
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
  .j-list-enter-active,
  .j-list-leave-active,
  .j-list-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }
  .j-list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }
  .j-list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }
  .j-list-leave-active {
    position: absolute;
  }
  .j-list-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
</style>
