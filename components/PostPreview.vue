<template>
  <div class="post-preview">
    <div :style="getPreviewStyle(post)">
    </div>
      <div class="preview-part">
        <nuxt-link :to="`/post/${post.id}`">
          <div class="post-preview-text">{{post.title}}</div>
          <div class="post-preview-sub">{{post.content.subtitle}}</div>
        </nuxt-link>
        <span class="preview-date">{{formatDate(post.createdAt)}}</span>
        <span class="preview-date">| {{post.wordCount}} words</span>
        <span class="preview-date">| {{post.totalClapCount}} claps</span>
        <span class="preview-date">| {{post.virtuals.recommends}} recommends</span>
        <span class="preview-tags" v-for="tag in getHashtagList(post)">
          <nuxt-link :to="`/posttag/${tag}`">#{{tag}}</nuxt-link>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: ['post'],
  data() {
    return {
    };
  },
  methods: {
    formatDate(d) {
      let date = new Date(d);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    getHashtagList(post) {
      return post.tags;
    },
    getPreviewStyle(post) {
      // url(${tweet.user.profile_image_url_https});
      return `
      background-image: url(https://cdn-images-1.medium.com/fit/c/125/125/0*DRKpdiAdCKzl38j7.);
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

<style scoped>
.post-preview {
  padding: 1rem 0;
}
.preview-part {
  display: inline-block;
  width: calc(100% - 6rem);
  vertical-align: top;
  padding: 0 0 1rem 1rem;
}
.post-preview-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: all;
  border-radius: 4px;
  font-size: 2rem;
  padding:0;
  position: relative;
  top: -0.25rem;
}
.post-preview-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: all;
  border-radius: 4px;
  color: #889aaf;
  padding-top: 0.25rem;
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
