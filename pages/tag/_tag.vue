<template>
  <div class="main-body">
    <h1>{{tag}}</h1>
    <div v-for="tweet in taggedTweets" :key="tweet.id">
      <TweetPreview :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios';
import TweetPreview from '~/components/TweetPreview';

export default {
  name: 'index',
  components: {
    TweetPreview,
  },
  data() {
    return {

    };
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    },
  },
  async asyncData(context) {
    let taggedTweets = await axios.get(`/api/tagged/${context.route.params.tag}`);
    taggedTweets = taggedTweets.data;
    return {
      taggedTweets,
    };
  },
  head() {
    return {
      title: "masinazarian."+this.$route.params.tag,
    };
  },
  mounted() {
  },
}
</script>

<style>

</style>
