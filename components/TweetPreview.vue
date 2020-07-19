<template>
  <div class="tweet-preview">
    <div :style="getPreviewStyle(tweet)">
    </div>
      <div class="preview-part">
        <nuxt-link :to="`/tils/${tweet.id}`">
          <div class="preview-text">{{tweet.text.replace(/#TIL/g, '')}}</div>
        </nuxt-link>
        <span class="preview-date">{{formatDate(tweet.createdAt)}}</span>
        <span class="preview-tags" v-for="tag in getHashtagList(tweet)">
          <nuxt-link :to="`/tag/${tag}`">#{{tag}}</nuxt-link>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TweetPreview',
  props: ['tweet'],
  data() {
    return {
    };
  },
  methods: {
    formatDate(d) {
      let date = new Date(d);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    getHashtagList(tweet) {
      return JSON.parse(tweet.hashtags).filter(x => x !== 'TIL'); // tweet.entities.hashtags.map(x => x.text);
    },
    getPreviewStyle(tweet) {
      // url(${tweet.user.profile_image_url_https});
      return `
      background-image: url(https://pbs.twimg.com/profile_images/1434982645/image_normal.jpg);
      background-size: contain;
      width: 4rem;
      height: 4rem;
      display: inline-block;
      `;
    },
  },
  async asyncData(context) {
    return null;
  },
  mounted() {
  },
};
</script>

<style>
.tweet-preview {
  padding: 1rem 0;
}
.preview-part {
  display: inline-block;
  width: calc(100% - 6rem);
  vertical-align: top;
  padding: 0 0 0 1rem;
}
.preview-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: all;
  border-radius: 4px;
}
.preview-text:hover {
  background-color: rgba(60,70,90,0.1);
}
.preview-date {
  color: #bbccdd;
  padding-right: 1rem;
  font-size: 0.8rem;
}
.preview-tags {
  font-size: 0.9rem;
}
.preview-tags a {
  color: #889aaf;
  text-decoration: underline;
  padding-right: 1rem;
}
.preview-text a {
  color: #35495e;
}
</style>
