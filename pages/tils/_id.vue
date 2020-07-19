<template>
  <div class="main-body">
    <h1 class="titlecase"><nuxt-link :to="`/tag/${topTag}`" style="color: inherit">{{topTag}}</nuxt-link></h1>
    <div class="subheader">
      <span class="date">{{formatDate(tweet.createdAt)}}</span>
      <span class="tags">
        <span v-for="tag in otherTags" class="tag titlecase">
          <nuxt-link :to="`/tag/${tag}`" class="titlecase">{{tag}}</nuxt-link>
        </span>
      </span>
    </div>
    <div>
      {{stripTags(tweet.text)}}
    </div>
    <div class="go-back">
      <nuxt-link to="/TIL">
        (back to #TIL)
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'index',
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
    tags() {
      if (!this.tweet) return [];
      return JSON.parse(this.tweet.hashtags);
    },
    topTag() {
      let tags = this.tags.filter(x => x !== 'TIL');
      if (!tags.length) return 'Today I Learned';
      return tags[0];
    },
    otherTags() {
      return this.tags.filter(x => x !== 'TIL' && x !== this.topTag);
    },
  },
  methods: {
    formatDate(d) {
      let date = new Date(d);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    stripTags(text) {
      return text.replace(/#\S+ */g,'').trim();
    }
  },
  async asyncData(context) {
    let tweet = await axios.get(`/api/fulltweet/${context.route.params.id}`);
    tweet = tweet.data;
    return {
      tweet,
    };
  },
  head() {
    return {
      title: "masinazarian.",
    };
  },
  mounted() {
  },
}
</script>

<style>
.titlecase {
  text-transform: capitalize;
}
.tags {
  float: right;
}
.tag {
  padding-right: 1rem;
  text-decoration: underline;
}
.subheader {
  background-color: rgba(60,70,90,0.1);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  line-height: 2rem;
  margin: 1rem 0 2rem 0;
  font-size: 0.9rem;
}
.date {
  color: #35495e;
}
.go-back {
  margin-top: 2rem;
  padding-right: 1rem;
  float: right;
}
</style>
