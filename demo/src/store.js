import Vue from 'vue'
import Vuex from 'vuex'

import { getCookie } from './modules/util.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:getCookie('UTUSER') || 0, //用户id
  },
  mutations: {
    setUserId(state,userId){
      //设置userid
      state.userId = userId
    }
  },
  actions: {

  }
})
