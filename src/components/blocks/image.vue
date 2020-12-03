<template>
  <div class="imageBlock">
    <figure class="imageBlock-imageWrapper">
      <img :src="require(`~/assets/images/${path}/${imageObject.path}`)" />
      <figcaption v-if="imageObject.caption" class="imageBlock-caption">{{ imageObject.caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    imageObject: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      default: 'illust',
    }
  },
};
</script>

<style lang="scss" scoped>
.imageBlock {
  &-caption {
    padding: 12px;
    color: $page-caption;
    font-size: 12px;
  }
}
</style>
