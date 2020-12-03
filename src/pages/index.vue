<template>
  <div class="index">
    <div class="index-container">
      <Logo size="large" text="Ruins" />
      <p>
        Ruinsは食事パン中心の
        <strong>パンイラストサイト</strong>です
        <nuxt-link class="index-enter" :to="{ name: 'contents' }">。</nuxt-link>
      </p>
      <p>公式とは一切関係がありません。</p>
      <p>
        また、
        <a href="http://lctree.fc2web.com/poison/index.html" target="_blank">毒吐きネットマナー</a>
        をご存じない方は一度熟読をお願いします。
      </p>
      <p>OKな方は最初の文章の句点からお入りください。</p>
      <p>閲覧後に不快に感じる点があったとしても、管理人は一切責任を負いません。</p>
    </div>

    <div class="index-bannerWrapper">
      <button type="button" class="index-banner" @click="onClickDummy">
        <img src="banner.gif" alt="Ruins" width="200" height="40" />
        <span>enter?</span>
      </button>
    </div>

    <div class="index-since">
      <p>since 2020/12/4</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/elements/logo.vue';

export default {
  components: {
    Logo,
  },
  methods: {
    onClickDummy() {
      alert('注意文を読んでください！！！！！！！！！！！');
      location.href = 'https://yahoo.co.jp/';
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  $root: #{&};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  &-enter {
    color: inherit;
    text-decoration: none;
  }

  &-bannerWrapper {
    margin-top: 20px;
  }
  &-banner {
    border: 0;
    background: none;
    img {
      border: 1px solid $page-sub;
    }
    span {
      text-decoration: underline;
    }
    &:hover {
      cursor: pointer;
      img {
        border-color: $page-accent;
      }
      span {
        color: $page-accent;
      }
    }
  }
  &-since {
    margin-top: 20px;
  }
}
</style>
