<template>
  <div class=" boxnav " id="echarts4"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart4',
  data() {
    return {
      myColor: [
        '#eb2100',
        '#eb3600',
        '#d0570e',
        '#d0a00e',
        '#34da62',
        '#00e9db',
        '#00c0e9',
        '#0096f3'
      ],
      option: {
        grid: {
          left: '2%',
          top: '1%',
          right: '5%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        yAxis: [
          {
            axisTick: 'none',
            axisLine: 'none',
            type : 'category',
            offset: '7',
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '14',
              }
            },
        
            data: [
              '服务器',
              '虚拟机',
              '存储设备',
              '网络设备',
              '安全设备',
              '环控设备',
              '供电设备'
            ]
            // '服务器','存储设备','虚拟机','网络设备','安全设备','环控设备','供电设备'
          },
          {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '14'
              }
            },
            data: [1514, 1619, 1623, 1968, 2158, 2456, 3506]
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: function(param) {
                  return param.value + '%'
                },
                textStyle: {
                  color: 'rgba(255,255,255,.8)',
                  fontSize: '12'
                }
              }
            },
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#03c893'
                  },
                  {
                    offset: 1,
                    color: '#0091ff'
                  }
                ]),
                barBorderRadius: 15
              }
            },
            z: 2
          },
          {
            name: '白框',
            type: 'bar',
            yAxisIndex: 0,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 15,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,.2)',
                barBorderRadius: 15
              }
            },
            z: 1
          }
        ]
      }
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('echarts4'))
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
