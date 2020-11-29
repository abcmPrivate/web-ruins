<template>
  <article class="logs">
    <ul class="logs-items">
      <li v-for="(log, index) in pageLogs" :key="index" class="logs-item">
        <ImageBlock :image-object="log" />
      </li>
    </ul>
  </article>
</template>

<script>
import ImageBlock from '@/components/blocks/image.vue';
import { logs } from '@/settings/logs.js';

export default {
  layout: 'contents',
  components: {
    ImageBlock,
  },
  asyncData({ params }) {
    const pageId = params.pageId;

    return {
      pageId,
    };
  },
  data() {
    return {
      logs,
      pageId: 0,
    };
  },
  computed: {
    pageLogs() {
      return this.logs[this.pageId];
    },
  },
};
</script>

<style lang="scss" scoped>
.logs {
  &-items {
    list-style: none;
    padding: 0;
  }
  &-item {
    & + & {
      margin-top: 40px;
    }
  }
}
</style>
