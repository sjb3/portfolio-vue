<template>
  <div id="gallery">
    <ul>
      <li v-for="todo in todos">{{todo.img}}</li>

    </ul>
  </div>
</template>

<script>
  export default {

    name: 'gallery',
    // var gallery = new Vue({
    //   el: '#gallery',
    //   data: {
    //     todos: [
    //       { img: url('../assets/mc/mc01.jpg')},
    //     ]
    //   }
    // })
  }
</script

<style>

</style>