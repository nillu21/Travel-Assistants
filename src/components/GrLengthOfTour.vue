<template>
  <div class="small">
    <LineChart :chart-data="datacollection" :options="options"/>
  </div>
</template>

<script>
import json from "../json/tourlength.json";
import LineChart from "./LineChart.vue";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      options: null,
      myJson: json,
      matches: []
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      let time = this.myJson.map(arr => arr.time);
      let no1 = this.myJson.map(arr => arr.no1);
      this.options = {
        title: {
          display: true,
          text: "Tour length past 6 months"
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };
      this.datacollection = {
        labels: time,
        datasets: [
          {
            label: "Tour length",
            backgroundColor: "rgba(100, 0, 255, 0.2)",
            data: no1
          }
        ]
      };
    }
  }
};
</script>
<style>
</style>
