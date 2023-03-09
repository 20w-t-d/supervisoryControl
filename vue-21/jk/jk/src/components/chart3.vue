<template>
  <div class="boxnav" id="echarts3"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart3',
  data() {
    return {
      option: {
        title: {
          text: 2562,
          subtext: '总共',
          x: 'center',
          y: '40%',
          textStyle: {
            color: 'white',
            fontSize: 30
          },
          subtextStyle: {
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['TVM', 'BOM', 'AGM', 'SC服务器', 'LC工作站'],
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            itemStyle: {
              normal: {
                color: function(colors) {
                  var colorList = [
                    '#fc8251',
                    '#5470c6',
                    '#91cd77',
                    '#ef6567',
                    '#f9c956',
                    '#75bedc'
                  ]
                  return colorList[colors.dataIndex]
                }
              }
            },
            name: '终端设备',
            type: 'pie',
            radius: ['70%', '90%'],
            center: ['50%', '51%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: 'TVM' },
              { value: 310, name: 'BOM' },
              { value: 234, name: 'AGM' },
              { value: 135, name: 'SC服务器' },
              { value: 1548, name: 'LC工作站' }
            ]
          }
        ]
      }
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('echarts3'))
        this.myChart.resize()
        this.myChart.setOption(this.option)
      }, 200)
    },
    pageAdapter() {
      this.myChart.resize()
    }
  },
  mounted() {
    this.chartInit()
    window.addEventListener('resize', this.pageAdapter)
  }
}
</script>

<style scoped></style>
