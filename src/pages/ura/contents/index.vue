<template>
  <div class="uraContents">
    <p>ほげ</p>
  </div>
</template>

<script>
export default {
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
