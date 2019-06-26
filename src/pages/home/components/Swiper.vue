<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img
          class="swiper_img"
          :src='item.src'
          alt
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "homeSwiper",
//   components: {
//     swiper,
//     swiperSlide
//   },
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination'
      },
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important;
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 31.25%
  background #eee
  .swiper_img 
    width 100%
    height 31.25vw

</style>
