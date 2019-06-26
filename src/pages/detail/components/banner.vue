<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe600;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <Fade-animation>
      <Common-gallary @close="handleGallaryClose" :gallaryImgs='gallaryImgs' v-show="gallaryShow"></Common-gallary>
    </Fade-animation>
  </div>
</template> 
<script>
import CommonGallary from '__common__/gallary/Gallary';
import FadeAnimation from '__common__/fade/fadeAnimation';
export default {
  components:{
    CommonGallary,
    FadeAnimation
  },
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array,

  },
  data(){
    return{
      gallaryShow:false
    }
  },
  name:'Danner',
  methods:{
    handleBannerClick(){
      this.gallaryShow = true
    },
    handleGallaryClose(){
      this.gallaryShow = false
    }
  }
};
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidee 
    height 0
    padding-bottom 55%;
    .banner-img
      width 100%
    .banner-info
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0, .8))
      color #fff
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height 2rem
      .banner-tittle
        flex 1
        font-size 1rem 
        padding 0 .8rem
      .banner-number
        margin-top .5rem
        margin-right .5rem
        padding 0 1rem
        height 1rem
        line-height 1rem
        border-radius .6rem
        background rgba(0,0,0, .8)
        font-size .3rem
        .banner-icon
          font-size .8rem
          padding 0 .2rem


</style>
