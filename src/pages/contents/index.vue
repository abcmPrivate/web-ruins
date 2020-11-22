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
      <template v-slot:sub>さぶさぶ</template>
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
    };
  },
  methods: {
    async send() {
      if (!this.clapMessage) return;
      const functions = firebase.app().functions('asia-northeast1');
      console.log(functions);

      const mailer = functions.httpsCallable('sendMail');
      await mailer({ message: this.clapMessage })
        .then(() => {
          console.log('send mail');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
}
</style>
