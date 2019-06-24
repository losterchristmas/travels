<template>
  <div class="header">
      <div class="header-left"><span class="iconfont">&#xe6a4;</span></div>
      <div class="header-input"><span class="iconfont">&#xe6a2;</span>  城市/景点/游玩</div>
      <router-link to="./City">
        <div class="header-right"><span class="iconfont cityIcon">&#xe697;</span>{{this.city}}</div>
      </router-link>
  </div>
</template>

<script>
export default {
  props:{
    city:String
  },
  data () {
    return {
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~__css__/iconfont/varible.styl';
    .header
      font-size:.9rem
      display:flex
      line-height :$headerHerght
      background:$bgColor
      color:#fff
      .header-left
        width: 2.6rem;
        text-align: center
      .header-input
        flex: 1
        border-radius: 0.6rem
        background: #fff
        margin: 0.28rem 0.24rem
        padding: 0 1rem
        line-height: 2rem
        color: #888
      .header-right
        width: 4rem
        display flex
        justify-content center
        color #fff
        .cityIcon
          font-size :1.4rem
</style>
