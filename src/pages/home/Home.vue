<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import homeHeader from "./components/Header";
import homeSwiper from "./components/Swiper";
import homeIcons from "./components/Icons";
import homeRecommend from "./components/Recommend";
import homeWeekend from "./components/Weekend";
import axios from "axios";
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
      city:'',
      swiperList:[],
    };
  },
  methods:{
    getHomeInfo(){
       axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      console.log(res)
      res = res.data
      if(res.ret&&res.data){
        this.city = res.data.city
        this.swiperList = res.data.swiperList

      }
    }
  },
  mounted(){
    this.getHomeInfo()
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
