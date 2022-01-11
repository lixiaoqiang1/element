<template>
<div class="main">
  <div id="myChart" :style="{width: '100%', height: '600px'}"></div>
</div>
</template>
<script>
//按需引入
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");//柱状图
require('echarts/lib/chart/line');//线型图
require('echarts/lib/chart/pie');//饼图
require('echarts/lib/chart/radar');//雷达图
require("echarts/lib/component/title");//图表标题
require('echarts/lib/component/dataZoom')//dataZoom组件
require("echarts/lib/component/tooltip");//tooltip
require("echarts/lib/component/legend");//图例

  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted () {
      this.aaa()
    },
    methods: {
      aaa(){
        var myChart = echarts.init(document.getElementById("myChart"));
        var option = {
          title: {
            text: 'Stacked Line'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };//echarts中图表option
        myChart.setOption(option);

      }
    },
  }
</script>
<style scoped>
.main>>>#isbody .el-table th{
    min-width: 20px;width: 40px;
}
.main>>>#isbody .el-table td{
    min-width: 20px;width: 40px;
}
</style>