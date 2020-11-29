<template>
  <div class="index">
    <h1>ruins shadow</h1>
    <div class="index-container">
      <p>表側に置けない別ジャンルのものを置いています。</p>
      <p>なんでも許せる人向け。</p>
      <p>OKな人は以下の情報を入力してお入りください。</p>
      <p>ユーザー名： yes</p>
      <p>パスワード： 管理人の好きな日本食（ローマ字で5文字）</p>
    </div>

    <div class="index-bannerWrapper">
      <a href="/ura/contents">入室する</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'ura',
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
}
</style>
