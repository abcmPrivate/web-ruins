<template>
  <div class="frame">
    <main class="frame-main">
      <slot name="main" />
    </main>
    <div class="frame-border" draggable @drag="onDragBorder" @dragover="onDragOverBorder"></div>
    <nav class="frame-sub" :style="subStyle">
      <slot name="sub" />
    </nav>
  </div>
</template>
<script>
const DEFAULT_WIDTH = 200;
export default {
  data() {
    return {
      navWidth: DEFAULT_WIDTH,
    };
  },
  computed: {
    subStyle() {
      return {
        width: `${this.navWidth}px`,
      };
    },
  },
  methods: {
    onDragBorder(e) {
      const width = e.clientX;

      // 200px未満にしない
      if (width <= DEFAULT_WIDTH) {
        this.navWidth = DEFAULT_WIDTH;
        return;
      }

      // 画面幅の50%は超えさせない
      const half = window.innerWidth / 2;
      if (width >= half) {
        this.navWidth = half;
        return;
      }

      this.navWidth = width;
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

  %-common {
    height: 100%;
    overflow: hidden scroll;
  }
  &-main {
    @extend %-common;
    flex: 1;
  }
  &-sub {
    @extend %-common;
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
  }
}
</style>
