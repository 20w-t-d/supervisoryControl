<template>
  <div class="piebox" id="pe03"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pie3',
  data() {
    return {
      option: {
        title: {
          text: 2 + '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '18'
          }
        },
        color: 'rgba(255,255,255,.3)',

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                // value: 2,
                name: '已使用',
                
              },
              {
                name: '未使用',
                // value: 100 - 2
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('pe03'))
        this.myChart.resize()
        this.myChart.setOption(this.option)
      }, 120)
    },
    pageAdapter() {
      this.myChart.resize()
    },
    updateData(){
      const option = {
        title:{
          text: (this.$store.state.bzcData / this.$store.state.allData).toFixed(2)*100 +'%'
        },
        series:[
          {
            data:[
              {
                value:this.$store.state.bzcData,
                itemStyle: {
                  normal: {
                    color: '#395ee6',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value:this.$store.state.allData - this.$store.state.bzcData
              }
            ]
          }
        ]
      }
      this.myChart.setOption(option)
    },
  },
  mounted() {
    this.chartInit()
    window.addEventListener('resize', this.pageAdapter)
    setTimeout(() => {
      this.updateData()
}, 800);
  }
}
</script>

<style scoped></style>
