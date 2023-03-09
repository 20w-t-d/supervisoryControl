import Vue from 'vue'
import Router from 'vue-router'
import chart1 from '../components/chart1.vue'
import chart2 from '../components/chart2.vue'
import chart3 from '../components/chart3.vue'
import chart4 from '../components/chart4.vue'
import chart5 from '../components/chart5.vue'
import chart6 from '../components/chart6.vue'
import page from '../components/page.vue'
import pie1 from '../components/pie1.vue'
import pie2 from '../components/pie2.vue'
import pie3 from '../components/pie3.vue'
import alert from '../components/alert.vue'
import test from '../components/test.vue'
import test2 from '../components/test2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page',
      component: page
    },
    {
      path: '/chart1',
      name: 'chart1',
      component: chart1
    },
    {
      path: '/chart2',
      name: 'chart2',
      component: chart2
    },
    {
      path: '/chart3',
      name: 'chart3',
      component: chart3
    },
    {
      path: '/chart4',
      name: 'chart4',
      component: chart4
    },
    {
      path: '/chart5',
      name: 'chart5',
      component: chart5
    },
    {
      path: '/chart6',
      name: 'chart6',
      component: chart6
    },
    {
      path: '/pie1',
      name: 'pie1',
      component: pie1
    },
    {
      path: '/pie2',
      name: 'pie2',
      component: pie2
    },
    {
      path: '/pie3',
      name: 'pie3',
      component: pie3
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})
