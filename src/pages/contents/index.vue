<template>
  <div class="contents">
    <div class="contents-section">
      <Logo class="contents-sectionHeading" text="what's new" size="small" />
      <News :values="news" />
    </div>
    <div class="contents-section">
      <Logo class="contents-sectionHeading" text="about" size="small" />
      <div class="contents-link">
        <p>Ruinsは食事パン中心の<strong>パンファンサイト</strong>です。</p>
        <p>link free</p>
        <dl class="contents-linkInfo">
          <div class="contents-linkInfoItem">
            <dt>site name</dt>
            <dd>Ruins</dd>
          </div>
          <div class="contents-linkInfoItem">
            <dt>url</dt>
            <dd>https://web-ruins.web.app/</dd>
          </div>
          <div class="contents-linkInfoItem">
            <dt>banner</dt>
            <dd>
              <img src="#" width="200" height="40" />
              <p>https://web-ruins.web.app/banner.gif</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="contents-section">
      <Logo class="contents-sectionHeading" text="me" size="small" />
      <p>えび / 199x.5 / webruinsmailer🍞gmail.com<br />好きなものはパンと寿司</p>

      <p>
        何かありましたら
        <nuxt-link :to="{ name: 'clap' }">clap</nuxt-link>
        かメール(🍞->@)へお願いします
      </p>
    </div>
  </div>
</template>

<script>
import { news } from '@/settings/index.js';
import News from '@/components/blocks/news.vue';
import Logo from '@/components/elements/logo.vue';
export default {
  components: {
    News,
    Logo,
  },
  layout: 'contents',
  data() {
    return {
      news,
    };
  },
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 32px 16px;
  overflow: hidden scroll;
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
  }
  &-sectionHeading {
    margin-bottom: 12px;
  }
}
</style>
