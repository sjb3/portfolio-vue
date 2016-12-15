<template>
  <div id="app">

    <intro></intro>
    <resume></resume>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Resume from './components/Resume'
export default {
  name: 'app',
  components: {
    Intro,
    Resume
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

  /*h1, h2 {
  color: #green;
}*/
}
</style>
