<template>
  <div>
    <div class="container">
    
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Book us here
      
    </h1>
    
    <!-- /.row -->

    <!-- Contact Form -->
    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
    <div class="row">
      <div class="col-lg-8 mb-4">
        <form action="booked_about.html" name="sentMessage" id="contactForm" novalidate>
          <div class="control-group form-group">
                <div class="controls">
                        <label>Full Name:</label>
                        <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                        <p class="help-block"></p>
                </div>
                <div class="control-group form-group">
                <div class="controls">
                        <label>Amount of People:</label>
                        <input class="form-control" type="number" name="Amount of people" min="1" max="100">
                        <p class="help-block"></p>
                </div>
               
          </div>
          <div class="controls">
              <label>Choose your tour:</label>
                <select class="form-control" name="Tours">
                        <option value="volvo">Old Town</option>
                        <option value="saab">Tallinn Royale</option>
                        <option value="fiat">Custom tour</option>
                        
                      </select>
                      <p class="help-block"></p>
          </div>
          
          <div class="control-group form-group">
            <div class="controls">
              <label>Phone Number:</label>
              <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Email Address:</label>
              <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
            </div>
          </div>
          <label for="start">Length of trip:</label>
          <div class="control-group form-group">
        <input type="date" id="start" name="trip-start"
            value="2019-03-31"
            min="2019-03-31" max="2020-12-31">
        <input type="date" id="start" name="trip-start"
            value="2019-04-01"
            min="2019-04-01" max="2020-12-31">
            <p class="help-block"></p>
          </div>
            <div class="control-group form-group">
            <div class="controls">
              <label>Message:</label>
              <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
            </div>
          </div>
          <div id="success"></div>
          <router-link class="btn btn-primary" to="/bookedabout" tag="button">BOOK</router-link>
          
          </div>
          <!-- For success/fail messages -->
          <!--<button href="booked_about.html" type="submit" class="btn btn-primary" id="sendMessageButton">BOOK</button> -->
        </form>
      </div>

    </div>
    <!-- /.row -->

  </div>
  </div>

  
</template>

<script>
export default {
  name: 'Booking',
  components: {
      
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
