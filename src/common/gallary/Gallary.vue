<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options='swiperOptions'>
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name:'CommonGallary',
  props:{
    gallaryImgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        observer:true,
        observeParents:true
      }
    }
  },
  methods:{
    handleGallaryClick(){
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    position fixed 
    z-index 2
    top 0
    left 0
    right 0
    bottom 0
    background #000;
    display flex
    flex-direction column
    justify-content center
    .wrapper
      width 100%
      height 0 
      padding-bottom 60%
      .gallary-img
        width 100%
        height 100%
      .swiper-pagination
        color #fff
        bottom -3rem
        font-size .9rem
</style>
