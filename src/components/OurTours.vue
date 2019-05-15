<template>
  <div>
    <div class="conatiner">
    <div class="row">
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a ><img class="card-img-top" src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1525523965000/photosp/247d5c75-57fb-41d6-aa9d-bdcbd80248c0/stock-photo-beauty-in-nature-travel-journey-travel-destinations-europe-fairy-travelling-old-town-tallinn-tallinn-estonia-247d5c75-57fb-41d6-aa9d-bdcbd80248c0.jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a>Old Town Royale</a>
            </h4>
            <p class="card-text">You will find out everything you can about the Old Town. Focusing on the old town making sure you don't miss out on anything. For true Medieval fans!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a ><img class="card-img-top" src="https://tickettoadventures.files.wordpress.com/2015/11/tallinn_kalamaja_houses.jpg?w=820" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a>Tallinn Royale</a>
            </h4>
            <p class="card-text">Find out everything about Tallinn. Old town, Kalamaja and Kadriorg Included!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a><img class="card-img-top" src="https://tickettoadventures.files.wordpress.com/2015/11/fotor_144791405664794.jpg?w=640" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a>Custom Tour</a>
            </h4>
            <p class="card-text">Like what we have, but want more, take this to have the most amazing custom experience</p>
          </div>
        </div>
      </div>
    </div>
    </div>


    
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
</template>

<script>
//import json from "../json/tourdata.json";
export default {
  name: 'OurTours'
  /*
 data() {
      return {myJson: json};
  }
 */ 
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
