<template>
  <Frame>
    <template v-slot:main>
      <Nuxt />
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
