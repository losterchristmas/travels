import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions:{
    // changCity(ctx,city){
    //   console.log(city)
    //   ctx.commit('changeCity',city)
    // }
  },
  mutations,
  getters:{
    doubleCity(){
      return state.city + ' ' +  state.city
    }
  }
})