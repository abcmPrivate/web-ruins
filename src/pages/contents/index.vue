<template>
  <div class="contents">
    <Frame>
      <template v-slot:main>
        <div>
          <form ref="form">
            <input type="text" v-model="clapMessage" placeholder="hoge" />
            <button type="button" @click="send">送る</button>
          </form>
        </div>
      </template>
      <template v-slot:sub>
        <nuxt-link :to="{ name: 'index' }">index</nuxt-link>
        <nuxt-link :to="{ name: 'clap' }">clap</nuxt-link>
      </template>
    </Frame>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  layout: 'contents',
  data() {
    return {
      clapMessage: '',
      isSending: false,
    };
  },
  methods: {
    async send() {
      if (!this.clapMessage) return;

      this.isSending = true;
      const functions = firebase.app().functions('asia-northeast1');

      const mailer = functions.httpsCallable('sendMail');
      await mailer({ message: this.clapMessage })
        .then(() => {
          console.log('send mail');
        })
        .catch((err) => {
          console.log(err);
        });
      this.isSending = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
}
</style>
