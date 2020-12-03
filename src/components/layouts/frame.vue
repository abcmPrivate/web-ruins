<template>
  <div class="frame">
    <main class="frame-main">
      <slot name="main" />
    </main>
    <div
      class="frame-border"
      :class="themeClass"
      draggable
      @drag="onDragBorder"
      @dragover="onDragOverBorder"
    ></div>
    <nav class="frame-sub" :style="subStyle">
      <slot name="sub" />
    </nav>
  </div>
</template>
<script>
const DEFAULT_WIDTH = 280;

export default {
  props: {
    theme: {
      type: String,
      validator: (theme) => ['default', 'ura'].includes(theme),
      default: 'default',
    },
  },
  computed: {
    subStyle() {
      const navWidth = this.$store.state.navWidth;
      return {
        width: `${navWidth}px`,
      };
    },
    themeClass() {
      return `theme-${this.theme}`
    }
  },
  methods: {
    onDragBorder(e) {
      const width = e.clientX;

      // default未満にしない
      if (width <= DEFAULT_WIDTH) {
        this.$store.dispatch('resetNavWidth');
        return;
      }

      // 画面幅の50%は超えさせない
      const half = window.innerWidth / 2;
      if (width >= half) {
        this.$store.dispatch('updateNavWidth', half);
        return;
      }

      this.$store.dispatch('updateNavWidth', width);
    },
    onDragOverBorder(e) {
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
.frame {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;

  @include mq-max {
    flex-direction: column-reverse;
    height: auto;
  }

  %-common {
    height: 100%;
    overflow: hidden scroll;
    @include mq-max {
      height: auto;
      overflow: auto;
    }
  }
  %-frame {
    padding: 32px 16px;
    box-sizing: border-box;

    @include mq-max {
      padding: 12px;
      overflow: auto;
    }
  }
  &-main {
    @extend %-common;
    flex: 1;
  }
  &-sub {
    @extend %-common;
    @extend %-frame;
    flex-shrink: 0;
  }
  &-border {
    @extend %-common;
    width: 1px;
    flex-shrink: 0;
    background-color: $page-accent;
    &:hover {
      cursor: col-resize;
    }
    @include mq-max {
      display: none;
    }
    &.theme-ura {
      background-color: $page-ura-accent;
    }
  }
}
</style>
