<template>
  <div class="contents">
    <Frame>
      <template v-slot:main>
        <p>main</p>
      </template>
      <template v-slot:sub>
        <nuxt-link :to="{ name: 'index' }">index</nuxt-link>
        <nuxt-link :to="{ name: 'clap' }">clap</nuxt-link>
      </template>
    </Frame>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  layout: 'contents',
};
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
}
</style>
