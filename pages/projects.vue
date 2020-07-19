<template>
  <div>
    <h1>Projects I've worked on</h1>
    <h2 class="project-title"><a href="https://www.atlas-app.io" target="_blank">Atlas by SAP</a></h2>
    <p>This has been my full time job since February! Building a beautiful, user-friendly
      geo-spatio-temporal analytics app.
      For most of the time, I was the only developer on the project, working with a small team of
    designers, data scientists, and product managers.</p>
    <h3>Stack</h3>
    <p>Backend: NodeJS, PostgreSQL & PostGIS extensions, MongoDB, Redis. Python for microservices, running
      in Docker containers. Nginx. 8 (and growing) servers on AWS.</p>
    <p>Frontend: Vue and MapboxGL.</p>
    <p>Data: Jupyter, Python (pandas) for ETL, Spark & SparkSQL for batch processing.</p>
    <h2 class="project-title"><a href="https://iotproject.org" target="_blank">Open IoT Project</a></h2>
    <p>An open source project I contribute to, offering an entire self-hosted IoT infrastructure,
      from data ingestion to visualization.</p>
    <h3>Stack</h3>
    <p>Backend: NodeJS, SQLite, Postgres, Apache Kafka, MQTT.</p>
    <p>Frontend: Nuxt (server-side rendering for Vue), d3.js, Websockets.</p>
    <p>Interesting aspects: Stream processing, time series anomaly detection, sandboxed user-provided code.</p>
    <h2 class="project-title">This site!</h2>
    <p>Yes, I'm including this site, which I built quickly with little emphasis on it looking nice.</p>
    <h3>Stack</h3>
    <p>Consumes the Twitter API, Medium via JSON, stores data in SQLite.</p>
    <h2 class="project-title">Other Projects</h2>
    <p>Many of these are now dead or unsupported, so no links.</p>
    <ul>
      <li>KaseLab, a simple CLI time tracking/invoicing app for freelancers.</li>
      <li>Dustbridge, a machine learning platform for IoT in Python/Django/SciPy.</li>
      <li>I wrote the first general purpose neural network app in the Android app store!</li>
      <li>ReactorSound, collaborative DJing in the browser with React, WebAudio and WebMIDI.</li>
      <li>Grek's Patent, patent search and analytics on the go in Android.</li>
      <li>GateTWei, Twitter<->Weibo glue app with realtime, automatic translation.</li>
    </ul>
  </div>

</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'projects',
  components: {
  },
  data() {
    return {
    };
  },
  head() {
    return {
      title: "masinazarian.projects",
    };
  },
  mounted() {
  },
  async asyncData(context) {

  },
}
</script>

<style >
.project-title {
  line-height: 3rem;
  text-decoration: underline;
}
p {
  margin: 1rem 0;
}
</style>
