<template>
  <div class="uraContents">
    <div class="uraContents-section">
      <Logo class="uraContents-sectionHeading" text="about shadow" size="small" theme="ura" />
      <p>主に寿司を置いています</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/elements/logo.vue';
export default {
  components: {
    Logo,
  },
  layout: 'ura-contents',
};
</script>

<style lang="scss" scoped>
.uraContents {
  padding: 32px 16px;
  overflow: hidden scroll;
  height: 100%;
}
</style>
