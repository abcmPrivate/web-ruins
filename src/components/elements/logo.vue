<template>
  <p :is="tag" class="logo" :class="sizeClass">{{ text }}</p>
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
      validator: (size) => ['default', 'small'].includes(size),
      default: 'default',
    },
  },
  computed: {
    sizeClass() {
      return `size-${this.size}`;
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
}
</style>
