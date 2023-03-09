<template>
  <div class="boxnav" id="echarts2"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart2',
  data() {
    return {
      myChart: null,
      startValue: 0,
      endValue: 5,
      flag: null,
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          transitionDuration: 0
          // formatter:'{c}' ,
        },
        grid: {
          left: '0',
          top: '30',
          right: '25',
          bottom: '0',
          containLabel: true
        },
        legend: {
          data: [
            '1号线',
            '2号线',
            '3号线',
            '4号线',
            '5号线',
            '6号线',
            '城郊线',
            '14号线'
          ],
          top: 0,
          left: 'center',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },

        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            show: false,
            startValue: null,
            endValue: null,
            filterMode: 'filter'
          }
        ],

        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              // rotate: -90,
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 14
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },

            data: [
              '17年3月',
              '17年6月',
              '17年9月',
              '17年12月',
              '18年3月',
              '18年6月',
              '18年9月',
              '18年12月',
              '19年3月',
              '19年6月',
              '19年9月',
              '19年12月'
            ]
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20
          }
        ],

        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
            // splitNumber: 6,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              formatter: '{value} %',
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 14
              }
            },

            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '1号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgba(228, 228, 126, 1)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgba(228, 228, 126, 1)',
                borderColor: 'rgba(228, 228, 126, .1)',
                borderWidth: 12
              }
            },
            data: [
              12.5,
              14.4,
              16.1,
              14.9,
              20.1,
              17.2,
              17.0,
              13.42,
              20.12,
              18.94,
              17.27,
              16.1
            ]
          },
          {
            name: '2号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgba(255, 128, 128, 1)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgba(255, 128, 128, 1)',
                borderColor: 'rgba(255, 128, 128, .1)',
                borderWidth: 12
              }
            },
            data: [
              6.4,
              0.1,
              6.6,
              11.2,
              42.1,
              26.0,
              20.2,
              18.31,
              21.59,
              24.42,
              34.03,
              32.9
            ]
          },
          {
            name: '3号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#B2EBF2',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: '#B2EBF2',
                borderColor: 'rgb(179, 229, 252,.1)',
                borderWidth: 12
              }
            },
            data: [12, 13, 10, 13, 9, 23, 21, 13.42, 24.12, 12.94, 11.27, 15.3]
          },
          {
            name: '4号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgb(255, 235, 238)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgb(255, 235, 238)',
                borderColor: 'rgba(255, 235, 238, .1)',
                borderWidth: 12
              }
            },
            data: [22, 18, 19, 23, 29, 33, 31, 12.42, 24.12, 12.94, 14.24, 11.1]
          },
          {
            name: '5号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgb(225, 190, 231)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgb(225, 190, 231)',
                borderColor: 'rgba(225, 190, 231, .1)',
                borderWidth: 12
              }
            },
            data: [15, 23, 20, 15, 19, 33, 41, 14.42, 25.12, 14.94, 11.27, 14.1]
          },
          {
            name: '6号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgb(244, 67, 54)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgb(244, 67, 54)',
                borderColor: 'rgba(244, 67, 54, .1)',
                borderWidth: 12
              }
            },
            data: [32, 33, 30, 33, 39, 33, 32, 17.42, 27.12, 28.94, 14.27, 13.1]
          },
          {
            name: '城郊线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgb(255, 171, 145)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgb(255, 171, 145)',
                borderColor: 'rgba(255, 171, 145, .1)',
                borderWidth: 12
              }
            },
            data: [8.2, 14, 25, 9, 11, 13, 13, 17.42, 22.12, 13.94, 12.27, 16.1]
          },
          {
            name: '14号线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: 'rgb(165, 214, 167)',
                width: 2
              }
            },

            itemStyle: {
              normal: {
                color: 'rgb(165, 214, 167)',
                borderColor: 'rgba(165, 214, 167, .1)',
                borderWidth: 12
              }
            },
            data: [
              17.2,
              17.0,
              13.42,
              20.12,
              18.94,
              12.5,
              14.4,
              16.1,
              14.9,
              20.1,
              17.27,
              16.1
            ]
          }
        ]
      }
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('echarts2'))
        this.myChart.resize()
        this.option.dataZoom[0].startValue = this.startValue
        this.option.dataZoom[0].endValue = this.endValue
        this.myChart.setOption(this.option)
        this.myChart.on('mouseover', () => {
          clearInterval(this.flag)
        })
        this.myChart.on('mouseout', () => {
          this.startInterval()
        })
      }, 200)
    },

    pageAdapter() {
      this.myChart.resize()
    },
    updateOption() {
      const option = {
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            show: false,
            startValue: this.startValue,
            endValue: this.endValue
          }
        ]
      }
      this.myChart.setOption(option)
    },
    startInterval() {
      if (this.flag) {
        this.flag = null
      }
      this.flag = setInterval(() => {
        if (this.endValue > 10) {
          this.startValue = 0
          this.endValue = 5
        }
        this.startValue++
        this.endValue++
        this.updateOption()
      }, 3000)
    },
  },
  mounted() {
    this.chartInit()
    window.addEventListener('resize', this.pageAdapter)
    this.startInterval()
  },
  destroyed() {
    this.flag = null
  }
}
</script>

<style scoped></style>
