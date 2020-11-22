<template>
  <div class="clap">
    <ClapImage :clap-image="randomImage" />
    <input type="text" :disabled="isSending" v-model="clapMessage" />
    <button type="button" :disabled="isSending" @click="sendMessage">{{ buttonText }}</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';
import ClapImage from '@/components/blocks/clapImage.vue';

import { clapImage } from '@/settings/index.js';

const createKey = () => {
  return Math.floor(Math.random() * clapImage.length);
};

export default {
  components: {
    ClapImage,
  },
  asyncData() {
    return {
      randomKey: createKey(),
    };
  },
  data() {
    return {
      clapImage,
      clapMessage: '',
      isSending: false,
      randomKey: 0,
    };
  },
  computed: {
    buttonText() {
      return this.isSending ? '送信中' : 'メッセージを送る';
    },
    randomImage() {
      return clapImage[this.randomKey];
    },
  },
  methods: {
    async sendMessage() {
      if (!this.clapMessage) return;
      this.isSending = true;
      const functions = firebase.app().functions('asia-northeast1');

      const mailer = functions.httpsCallable('sendMail');
      await mailer({ message: this.clapMessage })
        .then(() => {
          this.clapMessage = '';
          this.updateImage();
          alert('メッセージを送信しました');
        })
        .catch((err) => {
          console.log(err);
        });
      this.isSending = false;
    },
    updateImage() {
      this.randomKey = createKey();
    },
  },
};
</script>

<style lang="scss" scoped>
.clap {
  display: flex;
}
</style>
