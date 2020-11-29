<template>
  <div class="clap">
    <ImageBlock :image-object="randomImage" />
    <div class="clap-wrapper">
      <p>拍手ありがとうございます🍞</p>
      <p>お礼絵は現在5種類です。</p>
      <nuxt-link v-slot="{ href }" :to="{ name: 'clap' }">
        <form :action="href" method="POST" @submit.prevent class="clap-form">
          <div class="clap-buttonWrapper">
            <button type="submit" :disabled="isSending" @click="onClap">
              {{ buttonText }}
            </button>
          </div>

          <fieldset class="clap-textFormWrapper">
            <label for="clap-message" class="clap-textFormLabel">
              メッセージがあればどうぞ（任意）
            </label>
            <textarea
              id="clap-message"
              type="text"
              cols="30"
              rows="3"
              :disabled="isSending"
              v-model="clapMessage"
            />
          </fieldset>
        </form>
      </nuxt-link>
    </div>

    <p class="clap-backWrapper">
      <nuxt-link :to="{ name: 'contents' }">トップへ戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';
import ImageBlock from '@/components/blocks/image.vue';

import { clapImage } from '@/settings/index.js';

const createKey = () => {
  return Math.floor(Math.random() * clapImage.length);
};

export default {
  components: {
    ImageBlock,
  },
  asyncData() {
    return {
      randomKey: createKey(),
    };
  },
  data() {
    return {
      clapMessage: '',
      isSending: false,
      randomKey: 0,
    };
  },
  computed: {
    buttonText() {
      return this.isSending ? '送信中' : '拍手を送る';
    },
    randomImage() {
      return clapImage[this.randomKey];
    },
  },
  methods: {
    onClap() {
      this.sendMessage();
      this.updateImage();
    },
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  &-wrapper {
    margin-top: 20px;
  }
  &-form {
    margin-top: 32px;
  }
  &-textFormWrapper {
    border: 0;
    margin: 12px 0 0 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-textFormLabel {
    margin-bottom: 8px;
    font-size: 12px;
    color: $page-caption;
  }
  &-textFormArea {
    width: 100%;
    max-width: 320px;
  }

  &-backWrapper {
    margin-top: 20px;
  }
}
</style>
