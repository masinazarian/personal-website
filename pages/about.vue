<template>
  <div class="main-body">
    <img src="/masi.jpg" width="300" class="photo"></img>
    <h1 style="margin-top: 3rem;">Masi Nazarian</h1>
    <p>
      I care about bringing innovation and research into what I build and am not afraid of new tools, languages and frameworks.
      I have successfuly built several revenue-critical machine learning pipelines and online services that scaled to tens of millions of data points and queries while meeting time limit / latency requirements. 
      I'm very result oriented and believe in fast iteration and constant improvement.
    </p>
    <p>
      In my last role, I worked as a data scientist as part of the Search Engine Marketing data science team at Ask Media Group, an AdTech business serving hundreds of millions of monthly visits 
      across its large portfolio of content and SERP website. There I developed several machine learning and 
      natural language processing solutions that improved the traditional ways that PPC managers operate and make decisions.
    </p>
    <p>
      Before that, I worked as a polyglot/Go software engineer as part of the product backend team responsible for all 
      the backend services and pipelines that support AMG websites. 
    </p>
    <p>
      Before AMG, I worked as a software/embedded engineer within the controls system group of the R&D department at Mizuho OSI, a medical device company offering suite of solutions for orthopedic surgeries.
      There I closely collaborated with multiple engineering teams to develop and iterate over a novel surgical table. I also prototyped and developed the first version of the IOT application for an intelligent operation room. 
    </p>
    <p>
      For the past two years, I have been taking courses towards Masters in Software Engineeing 
      from <a class="text-white" href="https://cmpe.sjsu.edu/">San Jose State University</a> as a side fun activity while working full time in various 
      software engineering and data science roles. 
      My master's thesis is focused on proposing a safe algorithm for 
      online learning to rank of short texts using Bayesian multi-armed bandits. 
      I hold an engineering degree from University of Tehran.
    </p>

    <h1 style="margin-top: 1rem;">Interests</h1>
    <ul>
      <li>Machine Learning</li>
      <li>Natural Language Processing</li>
      <li>Deep Learning</li>
      <li>Cloud Technologies</li>
    </ul>



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
      title: "masinazarian.about",
    };
  },
  async asyncData(context) {
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
  padding-bottom: 2rem; 
  padding-top: 2rem;
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
