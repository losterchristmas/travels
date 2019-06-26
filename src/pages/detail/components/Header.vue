<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe6a4;</span>
    </router-link>
    <div class="header-fixed"  v-show="!showAbs" :style="opacityStyle">
      城市选择
      <div>
        <router-link to="/">  
          <div class="header-left">
            <span class="iconfont header-fixed-back">&#xe6a4;</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name:'DetailHeader',
  data(){
    return{
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  activated() {
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll(){
      const top = document.documentElement.scrollTop
      console.log(top);
      
      if(top>45){
        let opacity = top /140
        opacity = opacity > 1 ? 1 :opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~__css__/iconfont/varible.styl';
.header-abs
  position absolute
  left .6rem
  top .6rem
  height  2rem
  width  2rem
  line-height 2rem
  text-align center
  border-radius 1rem
  background rgba(0,0,0, .7)
  .header-abs-back
    color #fff
.header-fixed
  height: $headerHerght
  line-height: $headerHerght
  z-index 2
  overflow: hidden
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .9rem
  position fixed
  top 0
  left 0
  right 0
  .header-fixed-back
    width 2.6rem
    text-align center
    position absolute
    top 0
    left 0
  .header-left
    color #fff
</style>
