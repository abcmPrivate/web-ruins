<template>
  <div class="clapImage">
    <figure class="clapImage-imageWrapper">
      <img :src="require(`~/assets/images/illust/${clapImage.path}`)" />
      <figcaption>{{ clapImage.message }}</figcaption>
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

<style lang="scss" scoped></style>
