<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination'
      },
      swiperList:[{
          id:'001',
          src:'https://ps.ssl.qhmsg.com/sdr/400__/t01941ca4259c0a3c36.jpg'
      },{
          id:'001',
          src:'https://ps.ssl.qhmsg.com/sdr/400__/t0186328d67c4b5c91f.jpg'
      }]
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
