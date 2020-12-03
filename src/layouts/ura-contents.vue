<template>
  <Frame theme="ura">
    <template v-slot:main>
      <Nuxt />
    </template>
    <template v-slot:sub>
      <UraNavigation />
    </template>
  </Frame>
</template>

<script>
import Frame from '@/components/layouts/frame.vue';
import UraNavigation from '@/components/blocks/uraNavigation.vue';

export default {
  components: {
    Frame,
    UraNavigation,
  },
};
</script>
