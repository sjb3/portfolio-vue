<template>
  <div class="intro">
  <img class="hiroshima" src="../assets/mcqueen.jpg">
  <h1>My resume</h1>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hiroshima {
  background-size: cover;
  background-repeat: false;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
