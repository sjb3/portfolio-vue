<template>
  <div id="app">

    <intro></intro>
    <resume></resume>
    <gallery></gallery>

  </div>
</template>

<script>
import Intro from './components/Intro'
import Resume from './components/Resume'
import Gallery from './components/Gallery'

export default {
  name: 'app',
  components: {
    Intro,
    Resume,
    Gallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
  background-color: #bc8d8d;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  li {
    float: left;
  }
  li router-link {
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 17px;
  }
}

</style>
