<template>
  <div class="boxnav" id="echarts6"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart6',
  data() {
    return {
      option: {
        title: {
          text: '449',
          subtext: '总体',
          x: 'center',
          y: '40%',
          textStyle: {
            color: '#fff',
            fontSize: 22,
            lineHeight: 10
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: 16,
            lineHeight: 10
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 192,
                name: '三级告警'
              },
              {
                value: 105,
                name: '一级告警'
              },
              {
                value: 152,
                name: '二级告警'
              }
            ].sort(function(a, b) {
              return b.value - a.value
            }),
            roseType: 'radius',

            label: {
              normal: {
                formatter: ['{c|{c}个}', '{b|{b}}'].join('\n'),
                rich: {
                  c: {
                    color: 'rgb(241,246,104)',
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: 5
                  },
                  b: {
                    color: 'rgb(98,137,169)',
                    fontSize: 14,
                    height: 44
                  }
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(98,137,169)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('echarts6'))
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
