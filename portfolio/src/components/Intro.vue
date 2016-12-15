<template>
  <div class="intro">

  <h1>Contact info</h1>
  <!--<iframe src="//giphy.com/embed/BiPD99ObcQIaA?html5=true" width="480" height="284" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  <p><a href="http://giphy.com/gifs/alexander-mcqueen-BiPD99ObcQIaA">via GIPHY</a></p>-->
   <h3>klofseattle@hotmail.com</h3>
   <h3>206) 327-7850</h3>
   <h3><a href="https://github.com/sjb3">github.com/sjb3</a></h3>
   <h3><a href="https://www.linkedin.com/in/justin-byun">linkin.com/justin-byun</a></h3>
  </div>
</template>

<script>
export default {
  name: 'intro',
  // data () {
  //   return {
  //     // msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<style scoped>
.intro {
  /*iframe {
    height: 100%;
    width: 100%;
    size: 100%;
    opacity: 0.1;
  }*/
  padding-top: 50%;
  height: 100%;
  width: 100%;
  background-image: url('../assets/mcqueen.jpg');
  background-size: cover;

}

  h1, h2 {
    color: #d34a4a
  }

  h3 {
    color: #c8d34a;
    &:hover {
      color: red;
    }
  }
/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}*/

/*a {
  color: #42b983;
}*/
</style>
