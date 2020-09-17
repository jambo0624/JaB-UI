<template>
  <button class="j-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')" :disabled="disabled"
  >
    <j-icon v-if="icon && !loading" :name="icon" class="icon"></j-icon>
    <j-icon v-if="loading" name="loading" class="loading icon"></j-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from '../button/icon'
  export default {
    name: 'JButton',
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right');
        }
      },
      loading:{
        type: Boolean,
        default: false
      },
      disabled:{
        type: Boolean,
        default: false
      }
    },
    components:{
      'j-icon':Icon
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  @keyframes spin {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
  .j-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 .9em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
    }

    > .content {
      order: 2;
    }
    .loading{
      animation: spin 2s infinite linear;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }

      > .content {
        order: 1;
      }
    }
    &[disabled] {
      cursor: not-allowed;
    }
  }
</style>
