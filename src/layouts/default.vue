<template>
  <div class="container">
    <Nuxt />
    <div class="container-footer">
      <p>powered by firebase</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include layout-container;
  &-footer {
    margin-top: 40px;
    font-size: 12px;
    text-align: center;
  }
}
</style>
