import Vue from "vue"
// 引入Vuex
import Vuex from "vuex"

const actions={
  // jia(context,value){
  //   console.log("actions中的jia被调用了");
  //   context.commit("JIA",value)
  // }
  jiaOdd(context,value){
    // 判断语句在服务员这边执行
    if(context.state.sum%2!=0){
      context.commit("OddJIA",value)
    }
  }

}
const mutations={
  JIA(state,value){
    console.log("mutations被JIA调用了",state,value);
    state.sum+=value
  },
  JIAN(state,value){
    state.sum-=value;
  },
  OddJIA(state,value){
    state.sum+=value
  }
}
const state={
 sum:0
//  初始值
}
const getters={
  bigSum(state){
    return state.sum*10
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})