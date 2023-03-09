<template>
  <div class="piebox" id="pe02"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pie2',
  data() {
    return {
      option: {
        title: {
          // text: 17 + '%',
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
                // value: 17,
             
              },
              {
                name: '未使用',
                // value: 100 - 17
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
        this.myChart = echarts.init(document.getElementById('pe02'))
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
          text: (this.$store.state.jyData / this.$store.state.allData).toFixed(2)*100 +'%'
        },
        series:[
          {
            data:[
              {
                value:this.$store.state.jyData,
                name: '已禁用',
                itemStyle: {
                  normal: {
                    color: '#ea4d4d',
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
                value:this.$store.state.allData - this.$store.state.jyData
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
      console.log(this.$store.state.jyData / this.$store.state.allData);
}, 800);
  }
}
</script>

<style scoped></style>
