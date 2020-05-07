<template>
  <button class="j-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <j-icon v-if="icon && !loading" :name="icon" class="icon"></j-icon>
    <j-icon v-if="loading" name="loading" class="loading icon"></j-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes spin {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
  .j-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 .9em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
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
  }
</style>
