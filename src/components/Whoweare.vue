<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h2>This Is who we are</h2>
        <p>Our trips include:</p>
        <ul>
          <li>
            <strong>Fully customisable and personal experience</strong>
          </li>
          <li>A travel assistant for the entirety of your trip</li>
          <li>Places you would usually miss</li>
          <li>Time for shopping</li>
          <li>Easy transport to every location</li>
        </ul>
        
      </div>
      <div class="col-lg-6">
        <img id="side" class="img-fluid rounde " src="https://previews.123rf.com/images/maridav/maridav1403/maridav140300095/26345649-travel-couple-selife-self-portrait-berlin-germany-happy-tourists-people-in-front-of-berlin-cathedral.jpg" alt="">
      </div>
    </div>
    <!-- /.row -->

    <hr>

    <!-- Call to Action Section -->
    <div class="row mb-4">
      <div class="col-md-8">
        <p class="m-0 text-right">So stop dilly-dallying and book us here. Our tours sell-out quickly so book us the first chance you get. Please remember we usually take 24h to respond to your requests</p>
      </div>
      <div class="col-md-4">
        <router-link to="/booking" class="btn btn-lg btn-secondary btn-block"> Book us here </router-link>
      </div>
    </div>
	</div>
 
</template>

<script>

export default {
  name: 'Whoweare',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
