<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconlist='iconlist'></home-icons>
    <home-recommend :hotArr='hotArr'></home-recommend>
    <home-weekend :weekendArr='weekendArr'></home-weekend>
  </div>
</template>

<script>
import homeHeader from "./components/Header";
import homeSwiper from "./components/Swiper";
import homeIcons from "./components/Icons";
import homeRecommend from "./components/Recommend";
import homeWeekend from "./components/Weekend";
import axios from "axios";
import {mapState} from 'vuex'
export default {
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data() {
    return {
      lastCity:'',
      swiperList:[],
      iconlist:[],
      hotArr:[],
      weekendArr:[]
    };
  },
  methods:{
    getHomeInfo(){
       axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret&&res.data){
        this.swiperList = res.data.swiperList
        this.iconlist =  res.data.iconlist
        this.hotArr =  res.data.hotArr
        this.weekendArr =  res.data.weekendArr
        
      }
    }
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
