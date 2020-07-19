<template>
  <div class="main-body">
    <h1>{{post.title}}</h1>
    <div class="sub">
      <span> {{formatDate(post.createdAt)}}
      | {{post.totalClapCount}} claps</span>
      | <span>{{post.virtuals.recommends}} recommend</span>
      | <span>{{post.virtuals.readingTime.toFixed(2)}} reading time</span>
      | <a :href="post.mediumUrl" target="_blank" rel="nofollow"><span>Read this on Medium</span></a>
    </div>
    <div v-for="para in post.content.bodyModel.paragraphs">
      <div v-if="images(para)" v-html="images(para)" style="text-align: center;"/>
      <div v-if="images(para)" style="text-align:center; font-size: 0.9rem; color: gray;">caption</div>
      <p v-if="!images(para)">{{para.text}}</p>
    </div>
    <div style="border-top: 1px solid gray; margin-top: 1rem; padding-top: 1rem; max-width: 50%;">
      Masi Nazarian
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
  },
  methods: {
    images(para) {
      if (para.metadata) {
        return `<img src="https://cdn-images-1.medium.com/max/1000/${para.metadata.id}">`;
      }
      return '';
    },
    formatDate(d) {
      let date = new Date(d);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    stripTags(text) {
      return text.replace(/#\S+ */g,'').trim();
    }
  },
  async asyncData(context) {
    let post = await axios.get(`/api/mediumpost/${context.route.params.id}`);
    post = post.data.post; // JSON.parse(post);
    return {
      post,
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

<style scoped>
.sub {
  background-color: rgba(21, 133, 161, 0.5);
  color: white;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0 1.5rem 0;
  text-align: right;
  font-size: 1rem;
}
.sub a {
  color: white;
}
p {
  padding: 0.5rem 0;
}
p:first-letter {
  font-size: 1.6rem;
  padding-right: 0.25rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #35495e;
  width: 2rem;
  display: inline-block;
}
</style>
