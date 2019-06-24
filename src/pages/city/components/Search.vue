<template>
  <div class="search">
    <input class="searchInput" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
  @import '~__css__/iconfont/varible.styl';
    .search
      background $bgColor
      padding 0 .4rem .4rem
      .searchInput
        width 100%
        height 1.5rem
        line-height 1.5rem
        text-align center
        border-radius .2rem
        border 1px solid #fff
        box-sizing border-box
        color #666
        padding 0 .3rem
</style>
