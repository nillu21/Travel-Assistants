<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      
      <router-link to="/" class="navbar-brand"> Travel Assistants </router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto"> <!-- Seda ei saa kinni panna-->
            <li class="nav-item active">
              <router-link to="/" class="nav-link"> Home </router-link>
              
            </li>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              
              <router-link to="/about" class="nav-link"> About </router-link>
            </li>
            
          <li class="nav-item">
              <router-link to="/booking" class="nav-link"> Book us here </router-link>
              
            </li>
          <li class="nav-item">
            <router-link to="/ourtourspage" class="nav-link"> Our Tours</router-link>
           
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"> Contact </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link"> Admin </router-link>
          </li>
        </ul>
      </div>
    </ul>
    </div>
    </div>
  </nav>
    


    
    
  </div>
</template>

<script>
export default {
  name: 'Myheader',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
