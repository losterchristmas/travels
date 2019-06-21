<template>
  <div class="icons">
    <swiper>
        <swiper-slide>
            <div class="icon" v-for='(item,index) in iconlist' :key="index">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.src" :alt="item.text">
                </div>
                <a :href="item.url" class="icon-text">{{item.text}}</a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="icon" v-for='(item,index) in iconlist' :key="index">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.src" :alt="item.text">
                </div>
                <a :href="item.url" class="icon-text">{{item.text}}</a>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data(){
      return{
          iconlist:[{
              src:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
              text:'热门景点',
              url:'https://touch.piao.qunar.com/touch/list_北京_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
              text:'一日游',
              url:'https://sale.piao.qunar.com/touch/topic/mk/t_3954.htm?cat=from_area%3Dts_type_nav%26from_index%3D1%26from_value%3D%25E4%25B8%2580%25E6%2597%25A5%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              text:'北京必游',
              url:'href="https://sale.piao.qunar.com/touch/topic/mk/t_2927.htm?cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E5%258C%2597%25E4%25BA%25AC%25E5%25BF%2585%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"'
          },{
              src:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
              text:'水上乐园',
              url:'https://touch.piao.qunar.com/touch/list_北京_水上乐园.html?cat=from_area%3Dts_type_nav%26from_index%3D3%26from_value%3D%25E6%25B0%25B4%25E4%25B8%258A%25E4%25B9%2590%25E5%259B%25AD%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
              text:'爬长城',
              url:'https://touch.piao.qunar.com/touch/list_北京_北京长城.html?cat=from_area%3Dts_type_nav%26from_index%3D4%26from_value%3D%25E7%2588%25AC%25E9%2595%25BF%25E5%259F%258E%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
              text:'故宫',
              url:'http://touch.piao.qunar.com/touch/detail_38170.html?cat=from_area%3Dts_type_nav%26from_index%3D5%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
              text:'动植物园',
              url:'https://touch.piao.qunar.com/touch/list_北京_动植物园.html?cat=from_area%3Dts_type_nav%26from_index%3D6%26from_value%3D%25E5%258A%25A8%25E6%25A4%258D%25E7%2589%25A9%25E5%259B%25AD%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },{
              src:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
              text:'野生动物园',
              url:'http://touch.piao.qunar.com/touch/detail_13728.html?cat=from_area%3Dts_type_nav%26from_index%3D7%26from_value%3D%25E5%258C%2597%25E4%25BA%25AC%25E9%2587%258E%25E7%2594%259F%25E5%258A%25A8%25E7%2589%25A9%25E5%259B%25AD%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC'
          },]
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~__css__/iconfont/varible.styl';
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons 
  height: 0
  padding-bottom: 50%
  overflow: hidden
  .icon 
    position relative
    width: 25%
    height 0
    padding-bottom: 25%
    float: left
    .icon-img
      overflow hidden
      position absolute
      top 0
      left 0
      right 0
      bottom 1rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        height 100%
        display block
        margin 0 auto
    .icon-text
      position absolute
      left 0
      right 0
      bottom 0
      line-height 1rem    
      text-align center
      color: $darkTextColor
</style>
