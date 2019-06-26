<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">上海迪士尼乐园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe600;</span>39</div>
      </div>
    </div>
    <Common-gallary @close="handleGallaryClose" :imgs='imgs' v-show="gallaryShow"></Common-gallary>
  </div>
</template> 
<script>
import CommonGallary from '__common__/gallary/Gallary';
export default {
  components:{
    CommonGallary,
  },
  data(){
    return{
      imgs:['//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg','http://img1.qunarzz.com/sight/p0/1501/8b/8b71748d58a6f24e.water.jpg_350x240_f142ec8b.jpg'],
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
