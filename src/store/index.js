import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    city:'天津'
  },
  actions:{
    // changCity(ctx,city){
    //   console.log(city)
    //   ctx.commit('changeCity',city)
    // }
  },
  mutations:{
    changCity(state,city){
      state.city = city
    }
  }
})