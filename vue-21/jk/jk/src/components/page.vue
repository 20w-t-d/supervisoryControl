<template>
  <div style="height: 100%;">
    <div class="loading" ref="load">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 页面加载中...
      </div>
    </div>
    <div class="head">
      <h1 style="display: inline-block;font-size: 0.22rem;color:rgba(255,255,255,.7);top: -0.05rem;position: absolute;">郑州地铁集团有限公司</h1>
      <img src="../assets/img/ddlogo_20230224112419.png" style="width: 0.5rem; position: absolute; left: 7.7rem;top: 0.1rem;">
      <h1 style="display: inline-block;margin-left: 8.3rem;font-family: 黑体;">ANCC智能运维监控平台</h1>
      <div class="time" id="showTime">2019/12/05 16:16:54</div>
    </div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: calc(58% - .15rem)">
            <div class="alltitle">常用设备数量比例</div>
            <!-- <div class=" boxnav " id="echarts4"></div> -->
            <chart4 ref="chart4"></chart4>
          </div>
          <div class="boxall" style="height: calc(42% - .15rem)">
            <div class="alltitle">车站常用终端数量</div>
            <!-- <div class="boxnav" id="echarts3"></div> -->
            <chart3 ref="chart3"></chart3>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: calc(20% - .15rem)">
            <ul class="row h100 clearfix">
              <li class="col-6">
                <div class="sqzs h100">
                  <p>总监控数量</p>
                  <h1><span class="total">14968</span>个</h1>
                </div>
              </li>
              <li class="col-6">
                <ul class="row h100 clearfix">
                  <li class="col-4">
                    <div class="tit01">已启用</div>
                    <!-- <div class="piebox" id="pe01"></div> -->
                    <pie1 ref="pie1"></pie1>
                  </li>
                  <li class="col-4">
                    <div class="tit01">已禁用</div>
                    <!-- <div class="piebox" id="pe02"></div> -->
                    <pie2 ref="pie2"></pie2>
                  </li>
                  <li class="col-4">
                    <div class="tit01">不支持</div>
                    <!-- <div class="piebox" id="pe03"></div> -->
                    <pie3 ref="pie3"></pie3>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="boxall" style="height: calc(38% - .15rem)">
            <div class="alltitle">分线监控数量</div>
            <!-- <div class="boxnav" id="echarts1"></div> -->
            <chart1 ref="chart1"></chart1>
          </div>
          <div class="boxall" style="height: calc(42% - .15rem)">
            <div class="alltitle">月度分线告警比例</div>
            <!-- <div class="boxnav" id="echarts2"></div> -->
            <chart2 ref="chart2"></chart2>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: calc(33.333% - .15rem)">
            <div class="alltitle">监控项占比情况</div>
            <!-- <div class="boxnav" id="echarts5"></div> -->
            <chart5 ref="chart5"></chart5>
          </div>
          <div class="boxall" style="height: calc(33.333% - .15rem)">
            <div class="alltitle">最新告警项</div>
            <div class="boxnav">
              <alert></alert>
            </div>
          </div>
          <div class="boxall" style="height: calc(33.333% - .15rem)">
            <div class="alltitle">当日告警分级比例</div>
            <!-- <div class="boxnav" id="echarts6" style="height:calc(100% - .3rem);">
              
            </div> -->
            <chart6 ref="chart6"></chart6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../assets/css/comon0.css'
import '../../static/js.js'
import chart1 from './chart1.vue'
import chart2 from './chart2.vue'
import chart3 from './chart3.vue'
import chart4 from './chart4.vue'
import chart5 from './chart5.vue'
import chart6 from './chart6.vue'
import pie1 from './pie1.vue'
import pie2 from './pie2.vue'
import pie3 from './pie3.vue'
import alert from './alert.vue'
export default {
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    pie1,
    pie2,
    pie3,
    alert
  },
  name: 'page',
  data() {
    return {}
  },
  methods: {
    test() {
      console.log('test')
    }
  },

  mounted() {
    var load = this.$refs['load']
    load.style.display = 'none'
    setTimeout(() => {
      document.getElementsByClassName('total').innerHtml = this.$store.state.allData
    }, 700);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
