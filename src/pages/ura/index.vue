<template>
  <div class="index">
    <Logo tag="h1" text="Ruins shadow" size="large" theme="ura" />
    <div class="index-container">
      <p>表側に置けない別ジャンルのものを置いています。</p>
      <p>OKな人は以下の情報を入力してお入りください。</p>
      <p>ユーザー名： yes</p>
      <p>パスワード：このページのリンクになっていたアイコン（ローマ字で5文字）</p>
    </div>

    <div class="index-bannerWrapper">
      <a href="/ura/contents">enter?</a>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/elements/logo.vue';

export default {
  components: {
    Logo,
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
}
</style>
