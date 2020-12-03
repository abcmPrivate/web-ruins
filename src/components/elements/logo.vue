<template>
  <p :is="tag" class="logo" :class="[sizeClass, themeClass]">{{ text }}</p>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    text: {
      type: String,
      default: 'Ruins',
    },
    size: {
      type: String,
      validator: (size) => ['default', 'small', 'large'].includes(size),
      default: 'default',
    },
    theme: {
      type: String,
      validator: (theme) => ['default', 'ura'].includes(theme),
      default: 'default'
    },
  },
  computed: {
    sizeClass() {
      return `size-${this.size}`;
    },
    themeClass() {
      return `theme-${this.theme}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  color: $page-accent;
  font-family: 'Fredericka the Great', cursive;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  &.size-default {
    font-size: 32px;
  }
  &.size-small {
    font-size: 24px;
  }
  &.size-large {
    font-size: 48px;
  }

  &.theme-ura {
    color: $page-ura-accent;
  }
}
</style>
