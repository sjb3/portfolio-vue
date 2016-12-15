<template>
  <div id="gallery">
    <ul>
      <li style="list-style-type:none" v-for="item in items">{{item.img}}
      <img:src="{{item.img}}" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    name: 'gallery',
    data() {
      return {
        // title: 'McQueen01',
        items: [
          { img: '../assets/mc/mc01.jpg'},
        ]
     }
    }
  };
</script>

<style>

</style>