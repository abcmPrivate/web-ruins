<template>
  <div class="contents">
    <p>ほげほげ</p>
  </div>
</template>

<script>
export default {
  layout: 'contents',
};
</script>

<style lang="scss" scoped>
.contents {
  height: 100%;
  background: {
    image: url('~assets/images/illust/pan_bread_set.png');
    color: rgba($page-base, 0.3);
    blend-mode: lighten;
    repeat: no-repeat;
    position: right bottom;
  }
}
</style>
