<template>
  <div class="small">
    <BarChart :chart-data="datacollection" :options="options"/>
  </div>
</template>

<script>
import json from "../json/bookingdata.json";
import BarChart from "./BarChart.vue";

export default {    
  components: {
    BarChart
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
      let subject = this.myJson.map(arr => arr.subject);
      let no = this.myJson.map(arr => arr.no);

      this.options = {
        title: {
          display: true,
          text: "Amount of tours based off a month"
        },
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };
      this.datacollection = {
        labels: subject,
        datasets: [
          {
            label: "Amount of Tours per month",
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
