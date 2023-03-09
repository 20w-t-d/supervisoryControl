import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state(){
    return{
      // 就是公共的数据，所有的组件都可以直接使用
        allData:null,
        qyData:null,
        jyData:null,
        bzcData:null,
    }
  },
  mutations:{
    allData(state,data){
        state.allData = data
    },
    qyData(state,data){
        state.qyData = data
    },
    jyData(state,data){
        state.jyData = data
    },
    bzcData(state,data){
        state.bzcData = data
    }
  }
})
export default store
