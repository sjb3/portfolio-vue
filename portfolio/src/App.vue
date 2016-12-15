<template>
  <div id="app">

    <intro></intro>
  </div>
</template>

<script>
import Intro from './components/Intro'

export default {
  name: 'app',
  components: {
    Intro
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
  background-color: black;

  h1, h2 {
  color: #d34a4a
}
}
</style>
