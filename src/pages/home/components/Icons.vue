<template>
  <div class="icons">
    <swiper>
        <swiper-slide  v-for='(page,index) in pages' :key="index">
            <div class="icon" v-for='(item,index) in page' :key="index">
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
  props:{
      iconlist:Array
  },
  data(){
      return{
      
      }
  },
  computed:{
      pages(){
        const pages =[];
        this.iconlist.forEach((item,index) => {
            const page = Math.floor(index/8)
            if(!pages[page]){
                pages[page] = []
            }
            pages[page].push(item)
        });
        return pages
      }
  }

};
</script>
<style lang="stylus" scoped>
@import '~__css__/iconfont/varible.styl';
@import '~__css__/mixins.styl';
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
    padding-bottom: 21%
    margin: 2% 0
    float: left
    .icon-img
      overflow hidden
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      box-sizing border-box
      padding .1rem
      .icon-img-content
        height 80%
        display block
        margin 0 auto
    .icon-text
      position absolute
      left 0
      right 0
      bottom 0
      text-align center
      ellipsis()
     
</style>
