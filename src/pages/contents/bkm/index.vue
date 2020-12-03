<template>
  <div class="bkm">
    <div class="bkm-section">
      <Logo class="bkm-sectionHeading" text="bkm" size="small" />
      <p>工事中です＞＜</p>
    </div>
    <div class="bkm-section">
      <Logo class="bkm-sectionHeading" text="thanks" size="small" />
      <ul class="bkm-links">
        <li v-for="(item, index) in bkm" :key="index" class="bkm-linkItem">
          <a :href="item.href" target="_blank" class="bkm-anchor">
            <img v-if="item.banner" :src="item.banner" width="200" height="40" :alt="item.name" />
            <NoBanner v-else />
            <p class="bkm-anchorText">{{ item.name }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bkm } from '@/settings/index.js';
import NoBanner from '@/components/elements/noBanner.vue';
import Logo from '@/components/elements/logo.vue';
export default {
  components: {
    NoBanner,
    Logo,
  },
  layout: 'contents',
  data() {
    return {
      bkm,
    };
  },
};
</script>

<style lang="scss" scoped>
.bkm {
  padding: 32px 16px;
  overflow: hidden scroll;
  height: 100%;
  background: {
    image: url('~assets/images/illust/pan_bread_set.png');
    color: rgba($page-base, 0.3);
    blend-mode: lighten;
    repeat: no-repeat;
    attachment: fixed;
    position: right bottom;
  }
  &-section {
    & + & {
      margin-top: 48px;
    }
    &.is-ura {
      margin-top: 100vh;
    }
  }
  &-sectionHeading {
    margin-bottom: 12px;
  }
  &-links {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &-linkItem {
    & + & {
      margin-left: 20px;
    }
  }
  &-anchor {
    text-decoration: none;
    color: $page-accent;
    &:hover {
      text-decoration: underline;
    }
  }
  &-anchorText {
    font-size: 12px;
    color: $mono-gray;
    margin-top: 8px;
  }
}
</style>
