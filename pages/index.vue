<template>
  <div class="main-body">
    <img src="/masi.jpg" width="300" class="photo"></img>
    <h1>Masi Nazarian</h1>
    <h3 style="margin-top: 1rem;  margin-bottom: 2rem;">Welcome to my website!</h3>
    <p>
      I'm a data scientist / software engineer who strives to infuse cutting edge research and technologies into her creations. 
      I am very open to unknowns and enjoy building innovative data-driven solutions for different sorts of problems. 
    </p>
    <p>      
      I have experience working in diverse sub-fields of software engineering, including data science, backend software engineering,
      cloud technologies, web services, embedded systems, and IoT.
    </p>
    <p> 
      My technical interests these days are anything data science, machine learning, deep learning, and natural language processing. 
      My long term goal is to contribute in enhancing human capabilities and life quality using artificial intelligence and data. 
      <!--I love to leverage my software engineering and mathematics background to built end-to-end solutions that have the best of both worlds.-->
    </p>
    <p>
    </p>
    <!-- <p>
      I intend to write and publish more of my explorations in the form of <a href="/posts">posts</a> and <a href="/notebooks">notebooks</a>. 
      In the same lines, I'll be sharing more of the interesting tech stuff that I come across or learn <a href="/til">here</a>.
      I have not spent much time on Twitter and social media in general historically, but if I ever tweet and tag it with #TIL, it'll appear in that list.
    </p> -->
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
  head() {
    return {
      title: "masinazarian.",
    };
  },
  async asyncData(context) {
    let posts = await axios.get(`/api/collatemediumposts`);
    posts = posts.data;
    return {
      posts,
    };
  },
  mounted() {
  },
}
</script>

<style scoped>
.main-body {
  padding-top: 1rem;
  text-align: justify;
}
.photo {
  float: left; 
  padding-right: 2rem; 
  padding-bottom: 3rem; 
  padding-top: 3rem;
  padding-right: 2rem;
  border-radius: 50%;
}
h2 {
  padding: 1.2rem 0;
}
p {
  padding: 0.5rem 0;
}
p > a {
  text-decoration: underline;
}
li > a {
  text-decoration: underline;
}
</style>
