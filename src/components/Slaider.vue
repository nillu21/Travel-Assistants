<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide caption="Cool tallinn Tours"
                        text="Book us here."
                        img-src="https://t3.ftcdn.net/jpg/02/05/54/34/240_F_205543422_Sv2cWRRzyE02QOKGi6OMZrZ4gmiKN0jf.jpg"
      ></b-carousel-slide>
      <b-carousel-slide caption="Cool tallinn Tours"
                        text="Book us here."
                        img-src="http://89.34.16.229/img/%7B0a69bee8-3512-4690-8f6f-1d73d601aac6%7D.jpg"
      ></b-carousel-slide>
      
   </b-carousel>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>