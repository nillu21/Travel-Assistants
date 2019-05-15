<template>
 
  <div id="app">
    <link href="bootstrap2.css" rel="stylesheet">
    <Myheader/>
    <div class="container">
    <router-view></router-view>
    </div>
    <Myfooter/>




  </div>
  
</template>

<script>

import Myheader from './components/Myheader.vue'
import Myfooter from './components/Footer.vue'
export default {
  name: 'app',
  components: {
  
    Myheader,
    Myfooter
  }
}
</script>

<style>
body {
  padding-top: 56px;
}

.carousel-item {
  height: 65vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.portfolio-item {
  margin-bottom: 30px;
}
</style>
