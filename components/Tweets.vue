<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.id">
      <TweetPreview :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import TweetPreview from './TweetPreview';

export default {
  name: 'Tweets',
  props: ['tweets'],
  components: {
    TweetPreview,
  },
  mounted() {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
