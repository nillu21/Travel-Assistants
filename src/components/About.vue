<template>
  <div>
    <div class="container">
    <h1>About</h1>
    <div class="row">
      <div class="col-lg-6">
        <img class="img-fluid rounded mb-4" src="https://previews.123rf.com/images/maridav/maridav1403/maridav140300095/26345649-travel-couple-selife-self-portrait-berlin-germany-happy-tourists-people-in-front-of-berlin-cathedral.jpg" alt="">
      </div>
      <div class="col-lg-6">
        <h2>About Travel Assistants</h2>
        <p>Travel Assistants are like your local friends who you can hire and we will guide you all around the city.</p>
        <p>On our trips we focus on your wants and needs, which means are tours are fully customisable, we can go to the old town and see the main historic bits and go shopping or see the hipster are of Kalamaja and give you the true hipster experience.</p>
        <p>While functioning as tour guides we will also show you around the city and give you great historical insight, we will also accompany you from one place to another. Pick you up at the airport, bus station etc. Our goal is to give you the most stress-free experience possible.</p>
      </div>
    </div>
    <guides2/>
  </div>
  </div>
</template>

<script>
import Guides2 from "./Guides.vue"
export default {
  name: 'Home',
  components: {
    Guides2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
