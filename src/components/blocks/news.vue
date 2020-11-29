<template>
  <textarea class="news" v-model="news" cols="20" rows="3" />
</template>
<script>
export default {
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  computed: {
    news() {
      const labels = this.values.map((value) => {
        return `${value.date}: ${value.text}`;
      });
      return labels.join('\n');
    },
  },
};
</script>
