<template>
  <div class="container">
    <div class="top">
      <span class="header">
        <nuxt-link to="/">masinazarian.</nuxt-link>
        <ul style="float: right;">
          <li>
            <a href="https://github.com/masinazarian" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/masinazarian" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="mailto:nazarian.masi@gmail.com">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/masinazarian/masinazarian" target="_blank">
              <i class="fa fa-code-fork" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@masinazarian/" target="_blank">
              <i class="fa fa-medium" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/masinazarian/" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </span>
    </div>
    <div class="content">
      <div class="main">
        <nuxt/>
      </div>
      <div class="sidebar">
        <Sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';

export default {
  components: {
    Sidebar,
  }
}
</script>

<style>
@media only screen and (max-device-width: 600px) {
  .container {
    font-size: 13px !important;
    padding: 0 !important;
    letter-spacing: normal !important;
  }
  .main {
    max-width: 73vw;
    width: auto;
  }
  .sidebar {
    padding-left: 0.25rem !important;
    font-size: 12px !important;
    min-width: 16vw !important;
    max-width: 20vw !important;
    width: auto !important;
    white-space: nowrap;
  }
  .sidelinks li > a > i {
    padding-right: 0.25rem !important;
  }
  h2 {
    padding: 0.2rem 0 !important;
  }
  h1 {
    margin-top: 0.5rem !important;
  }
  img {
    max-width: 50vw !important;
  }
}
@media only screen and (max-device-width: 768px) and (min-device-width: 768px) {
  .main {
    max-width: 71vw;
  }
}

.fa {
  line-height: 3rem;
  color: white;
  padding-right: 1rem;
  display: inline-block;
}
.header ul > li {
  display: inline-block;
}
.container
{
  margin: 0;
  font-family: 'Cabin', sans-serif;
  line-height: 1.5rem;
  font-size: 18px;
  padding: 1rem 2rem;
}
.content {
  position: relative;
  margin-top: 1rem;
}
.sidebar {
  border-left: 1px solid #35495e;
  color: #35495e;
  display: inline-block;
  width: 16vw;
  overflow: hidden;
  text-align: left;
  padding: 0 0 1rem 1rem;
  margin-top: 1rem;
  float: right;
}
.main {
  display: inline-block;
  width: 73vw;
  padding-left: 1rem;
}
.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.top {
  color: white;
  line-height: 3rem;
  padding-left: 2rem;
  background-color: #35495e;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: 'Noto Serif', serif;
}
.header > a {
  text-decoration: none;
  color: white;
}
</style>
