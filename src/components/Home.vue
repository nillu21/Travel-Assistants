<template>
  <div>
    <div class="container">
    <slaider></slaider>
    <ourtours></ourtours>
    <whoweare></whoweare>
    </div>
  </div>
</template>

<script>

import Whoweare from "./Whoweare.vue"
import Ourtours from "./OurTours.vue"
import Slaider from "./Slaider.vue"
export default {
  name: 'Home',
  components: {

      
      Whoweare,
      Ourtours,
      Slaider      
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tours {
  display: flex;
}
</style>
