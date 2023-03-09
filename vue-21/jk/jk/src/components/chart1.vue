<template>
  <div class="boxnav" id="echarts1"></div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'chart1',
  data() {
    return {
      option: null,
      myChart: null,
      Data: [],
      qyData:[],
      jyData:[],
      bzcData:[],
      allData:[],
      testData:[111,200,600,400,500]
    }
  },
  methods: {
    async chartInit() {
      setTimeout( () => {
        this.myChart = echarts.init(document.getElementById('echarts1'))
        this.option = {
          tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          transitionDuration: 0
        },
        legend: {
          width: '500',
          right: 'center',
          top: 0,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 13,
          itemHeight: 9
        },
        grid: {
          top: '20%',
          right: '50',
          bottom: '20',
          left: '50'
        },
        xAxis: [
          {
            type: 'category',
            data: ['ANCC', '1号线', '2号线', '5号线','城郊线'],
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.7)',
                fontSize: '14'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位个',
            axisTick: { show: false },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              fontSize: 14,
              color: 'rgba(255,255,255,.6)'
            },
            axisLine: {
              lineStyle: { color: 'rgba(255,255,255,.1)' }
            }
          }
        ],

        series: [
          {
            name: '已启用',
            type: 'bar',
            stack: 'Ad',
            barWidth: '45%',
            emphasis: {
              focus: 'series'
            },
  
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#8bd46e'
                  },
                  {
                    offset: 1,
                    color: '#09bcb7'
                  }
                ])
              }
            },
            barGap: '0.2'
          },
          {
            name: '不支持',
            type: 'bar',
            stack: 'Ad',
            barWidth: '45%',
            emphasis: {
              focus: 'series'
            },
           
            barGap:'-100%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#248ff7'
                  },
                  {
                    offset: 1,
                    color: '#6851f1'
                  }
                ])
              }
            },
            barGap: '0.2'
          },
          {
            name: '已禁用',
            type: 'bar',
            stack: 'Ad',
            barWidth: '45%',
            emphasis: {
              focus: 'series'
            },
        
            barGap:'-100%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#fccb05'
                  },
                  {
                    offset: 1,
                    color: '#f5804d'
                  }
                ])
              }
            },
            barGap: '0.2'
          },
          {
            name: '总个数',
            type: 'line',
            emphasis: {
              focus: 'series'
            },
      
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(255, 128, 128, 1)'
              }
            },
            smooth: true,
            label:{
              show:true,
              color:'white'
            },
          }
        ]
        },
        
        this.myChart.setOption(this.option)
      }, 120)
    },
    pageAdapter() {
      this.myChart.resize()
    },
    getData() {
      this.axios.get('jkall').then(data => {
        this.Data = data.data
        // console.log(data.data);
        // console.log(this.Data);
        var that = this
        this.Data.map(function(item,index,arr){
        //  console.log(item);
          if(item.groupname == 'ANCC'){
            // console.log(item)
            if(item.state ==0 && item.status ==0){
              that.qyData.push(item.heji)
            }else if(item.state ==0 && item.status ==1){
              that.jyData.push(item.heji)
            }else if(item.state ==1 && item.status ==0){
              that.bzcData.push(item.heji)
            }
          }else{
            if(item.state ==0 && item.status ==0){
              that.qyData.push(item.heji)
            }else if(item.state ==0 && item.status ==1){
              that.jyData.push(item.heji)
            }else if(item.state ==1 && item.status ==0){
              that.bzcData.push(item.heji)
            }
          }
        })
        for (let index = 0; index < this.qyData.length; index++) {
          this.allData.push(this.qyData[index]+this.jyData[index]+this.bzcData[index]);
        }
      })
    },
    updateMychart() {
      const option = {
        series:[
          {
            data:this.qyData
          },
          {
            data:this.jyData
          },
          {
            data:this.bzcData
          },
          {
            data:this.allData
          }
        ]
      }
      this.myChart.setOption(option)
    }
  },
  mounted() {
    this.chartInit()
    this.getData()
    setTimeout(() => {
      this.updateMychart()
      var total = 0
     var qyAll = 0
     var jyAll = 0
     var bzcAll = 0
    for (let index = 0; index < 4; index++) {
      total += this.allData[index]
      qyAll += this.qyData[index]
      jyAll += this.jyData[index]
      bzcAll += this.bzcData[index]
    }
    this.$store.commit('qyData',qyAll)
    this.$store.commit('allData',total)
    this.$store.commit('jyData',jyAll)
    this.$store.commit('bzcData',bzcAll)
    }, 700)
  
     
    window.addEventListener('resize', this.pageAdapter)
  }
}
</script>

<style scoped></style>
