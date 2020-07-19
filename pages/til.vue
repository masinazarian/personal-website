<template>
  <div>
    <h1>Today I Learned</h1>
    <p>This is a live-updated collection of Tweets that I've tagged as #TIL. The intention is to
    share, or just take a note for myself, of useful small tidbits.</p>
    <Tweets :tweets="tweets"/>
  </div>
</template>

<script>
import Tweets from '~/components/Tweets';
import axios from '~/plugins/axios';

export default {
  name: 'til',
  components: {
    Tweets,
  },
  data() {
    return {
      tweets: [],
    };
  },
  head() {
    return {
      title: "masinazarian.til",
    };
  },
  mounted() {
  },
  async asyncData(context) {
    let tweets = await axios.get(`/api/tweets`);
    return {
      tweets: tweets.data.tweets,
    };

  },
}
</script>

<style>
p {
  margin: 1rem 0;
}
</style>
