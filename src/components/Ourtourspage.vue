<template>
  <div>
    
    <div class="container">
    <slaider/>
     <h2>Our Tours</h2>
    <p> Here you have a selection of our best tours available</p>
        <ourtours/>
    
    <!--
    <div class="row">
      <div v-bind="myJson">    
        <div v-for="data in myJson" v-bind:key="data.id">
          <div class="col-lg-4 col-sm-6 portfolio-item">
         <div class="card h-100">
          <img class="card-img-top tourimg" v-bind:src="data.photo">
            
            <div class="card-body">
            <h4 class="card-title"> {{data.title}}</h4>
            <p class="card-text"> {{data.body}}</p>
            </div>
          </div>
          </div>
        </div>
        
        
        </div>
    
      </div>
    -->  
      
    </div> 
  </div>
</template>

<script>
import Ourtours from "./OurTours.vue"
import Slaider from "./Slaider.vue"
export default {
  name: 'Ourtourspage',
 components:  {
    Ourtours,
    Slaider
 }
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nobull {
  list-style:none;
  margin: 0 auto;
  display: center;
  padding: 10px;
  float: left;
}

.tourimg {
  object-fit: cover;
}
</style>
