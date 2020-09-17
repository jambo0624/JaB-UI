<template>
  <div class="tabs-head-item" @click="onClick"
       :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JTabsHeadItem",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String || Number,
        required: true
      }
    },
    data(){
      return {
        active: false
      }
    },
    computed:{
      classes(){
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if(this.eventBus){
        this.eventBus.$on('update:selected', (name) => {
          this.active = this.name === name
        })
      }
    },
    methods: {
      onClick(){
        if(this.disabled) return
        this.eventBus && this.eventBus.$emit('update:selected',this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $disabled-text-color: grey;
  .tabs-head-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
