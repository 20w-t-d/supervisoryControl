<template>
  <div class="piebox" id="pe01"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pie1',
  data() {
    return {
      option: [],
      data:[],
    }
  },
  methods: {
    chartInit() {
      setTimeout(() => {
        this.myChart = echarts.init(document.getElementById('pe01'))
        this.option = {
        title: {
          text: 81 + '%',
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
                // value: 81,
              
              },
              {
                name: '未使用',
                // value: 100 - 81
              }
            ]
          }
        ]
        }
        this.myChart.setOption(this.option)
      }, 120)
    },
    pageAdapter() {
      this.myChart.resize()
    },
    updateData(){
      const option = {
        title:{
          text: (this.$store.state.qyData / this.$store.state.allData).toFixed(2)*100 +'%'
        },
        series:[
          {
            data:[
              {
                value:this.$store.state.qyData,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color: '#eaff00',
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
                value:this.$store.state.allData - this.$store.state.qyData
              }
            ]
          }
        ]
      }
      this.myChart.setOption(option)
    },
    // getData(){
    //   this.axios.get('jkall').then(data=>{
    //     console.log(data)
    //     this.data = data
    //   })
    // }
  },
  mounted() {
    this.chartInit()
    setTimeout(() => {
  
      this.updateData()
     
    }, 800);

    window.addEventListener('resize', this.pageAdapter)
  }
}
</script>

<style scoped></style>
