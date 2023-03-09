<template>
  <div style="width: 400px;height: 600px;" ref="test"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'test',
  data() {
    return {
      mycahrt: null
    }
  },
  methods: {
    chartinit() {
      this.mycahrt = echarts.init(this.$refs.test)
      var option = {
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: { type: 'shadow' },
        //   transitionDuration: 0
        // },

        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '小柱',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barGap: '-100%',
            z: 10
          },
          {
            name: '大柱',
            data: [150, 250, 200, 120, 150, 160, 150],
            type: 'bar'
          },
          {
            name:'大柱折线',
            data:[150, 250, 200, 120, 150, 160, 150],
            type:'line',
            smooth: true,
            label:{
              show:true,
              position: 'top'
            }
          }
        ]
      }
      this.mycahrt.setOption(option)
    }
  },
  mounted() {
    this.chartinit()
    console.log(this.$refs.test)
  }
}
</script>

<style scoped></style>