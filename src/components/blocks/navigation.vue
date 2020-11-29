<template>
  <nav class="navigation">
    <div class="navigation-wrapper">
      <nuxt-link :to="{ name: 'index' }" class="navigation-index">
        <Logo />
      </nuxt-link>
      <ul class="navigation-links">
        <li class="navigation-linkItem">
          <nuxt-link :to="{ name: 'contents' }">about</nuxt-link>
        </li>
        <li class="navigation-linkItem">
          <nuxt-link :to="{ name: 'contents-bkm' }">bkm</nuxt-link>
        </li>
        <li class="navigation-linkItem">
          <nuxt-link :to="{ name: 'clap' }">clap</nuxt-link>
        </li>
      </ul>

      <div v-if="logsArray.length > 0" class="navigation-logWrapper">
        <Logo tag="h2" text="logs" size="small" />
        <ul class="navigation-logs">
          <li v-for="(key, index) in logsArray" :key="index" class="navigation-logItem">
            <nuxt-link :to="{ name: 'contents-logs-pageId', params: { pageId: key } }">
              ■
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navigation-shadowWrapper">
      <nuxt-link :to="{ name: 'ura' }">🍣</nuxt-link>
    </div>
  </nav>
</template>

<script>
import { logs } from '@/settings/logs.js';
import Logo from '@/components/elements/logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    logsArray() {
      return Object.keys(logs);
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 16px;
  height: 100%;
  &-index {
    text-decoration: none;
  }
  &-links {
    display: flex;
    list-style: none;
    padding: 0;
  }
  &-linkItem {
    line-height: 1;
    & + & {
      position: relative;
      margin-left: 12px;
      padding-left: 12px;
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
        background-color: $mono-black;
      }
    }
  }

  &-logWrapper {
    margin-top: 32px;
  }
  &-logs {
    display: flex;
    list-style: none;
    padding: 0;
  }
  &-logItem {
    & + & {
      margin-left: 0.5em;
    }
  }
}
</style>
