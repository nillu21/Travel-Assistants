<template>
  <div>
    <div class="small">
      <PieChart :chart-data="datacollection" :options="options"/>
    </div>
  </div>
</template>

<script>
import json from "../json/touramount.json";
import PieChart from "./PieChart.vue";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      datacollection: null,
      options: null,
      myJson: json
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      let tourtype = this.myJson.map(arr => arr.tourtype);
      let no = this.myJson.map(arr => arr.no);

      this.options = {
        title: {
          display: true,
          text: "Past 1 year tours booked"
        }
      };
      this.datacollection = {
        labels: tourtype,
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 123, 255, 0.6)",
              "rgba(0, 110, 220, 0.6)",
              "rgba(0, 100, 180, 0.6)",
              "rgba(20, 80, 140, 0.6)",
              "rgba(60, 60, 120, 0.6)",
              "rgba(80, 40, 80, 0.4)",
              "rgba(100, 20, 60, 0.4)"
            ],
            data: no
          }
        ]
      };
    }
  }
};
</script>
<style>
</style>
