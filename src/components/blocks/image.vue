<template>
  <div class="imageBlock">
    <figure class="imageBlock-imageWrapper">
      <img :src="require(`~/assets/images/illust/${imageObject.path}`)" />
      <figcaption v-if="imageObject.caption" class="imageBlock-caption">
        {{ imageObject.caption }}
      </figcaption>
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
