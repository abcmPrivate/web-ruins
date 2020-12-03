<template>
  <nav class="navigation">
    <div class="navigation-wrapper">
      <nuxt-link :to="{ name: 'ura' }" class="navigation-index">
        <Logo text="Ruins shadow" theme="ura" />
      </nuxt-link>
      <ul class="navigation-links">
        <li class="navigation-linkItem">
          <nuxt-link :to="{ name: 'ura-contents' }">shadow top</nuxt-link>
        </li>
        <li class="navigation-linkItem">
          <nuxt-link :to="{ name: 'contents' }">back🍞</nuxt-link>
        </li>
      </ul>
    </div>

    <div v-if="logsArray.length > 0" class="navigation-wrapper">
      <Logo tag="h2" text="logs" size="small" theme="ura" />
      <ul class="navigation-logs">
        <li v-for="(key, index) in logsArray" :key="index" class="navigation-logItem">
          <nuxt-link :to="{ name: 'ura-contents-logs-pageId', params: { pageId: key } }">■</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { uraLogs } from '@/settings/logs.js';
import Logo from '@/components/elements/logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    logsArray() {
      return Object.keys(uraLogs);
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  height: 100%;
  &-wrapper {
    & + & {
      margin-top: 32px;
    }
    @include mq-max {
      display: flex;
      align-items: center;
      & + & {
        margin-top: 0;
      }
    }
  }
  &-index {
    text-decoration: none;
  }
  &-links {
    display: flex;
    list-style: none;
    padding: 0;
    @include mq-max {
      margin: 0 0 0 12px;
    }
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

  &-logs {
    display: flex;
    list-style: none;
    padding: 0;
    @include mq-max {
      margin: 0 0 0 12px;
    }
  }
  &-logItem {
    & + & {
      margin-left: 0.5em;
    }
  }
}
</style>
