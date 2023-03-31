<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getecharts();
  },
  methods: {
    getecharts() {
      console.log("999");
      var myChart = echarts.init(document.getElementById("main"));
      var option = {
        legend: {
          data: ["Rainfall", "Evaporation"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "Rainfall",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            barWidth: 10, //柱子宽度
            barGap: 0.5 //柱子之间间距
          },
          {
            name: "Evaporation",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
