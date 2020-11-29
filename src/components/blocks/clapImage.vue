<template>
  <div class="clapImage">
    <figure class="clapImage-imageWrapper">
      <img :src="require(`~/assets/images/illust/${clapImage.path}`)" />
      <figcaption class="clapImage-caption">{{ clapImage.message }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    clapImage: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.clapImage {
  &-imageWrapper {
    border: 1px solid $page-accent;
  }
  &-caption {
    padding: 12px;
    color: $page-caption;
    font-size: 12px;
  }
}
</style>
