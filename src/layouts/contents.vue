<template>
  <Frame>
    <template v-slot:main>
      <div class="sec-main">
        <Nuxt />
      </div>
    </template>
    <template v-slot:sub>
      <Navigation />
    </template>
  </Frame>
</template>

<script>
import Frame from '@/components/layouts/frame.vue';
import Navigation from '@/components/blocks/navigation.vue';

export default {
  components: {
    Frame,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.sec-main {
  padding: 32px 16px;
  height: 100%;
  box-sizing: border-box;
}
</style>
