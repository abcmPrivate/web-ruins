<template>
  <article class="logs">
    <ul class="logs-items">
      <li v-for="(log, index) in pageLogs" :key="index" class="logs-item">
        <ImageBlock :image-object="log" path="ura-illust" />
      </li>
    </ul>
  </article>
</template>

<script>
import ImageBlock from '@/components/blocks/image.vue';
import { uraLogs } from '@/settings/logs.js';

export default {
  layout: 'ura-contents',
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
      uraLogs,
      pageId: 0,
    };
  },
  computed: {
    pageLogs() {
      return this.uraLogs[this.pageId];
    },
  },
};
</script>

<style lang="scss" scoped>
.logs {
  padding: 32px 16px;
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
