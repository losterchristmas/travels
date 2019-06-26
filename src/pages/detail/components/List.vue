<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"> </span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default { 
  name:'DetailList',
  props:{
    list:Array
  },
  data() {
    return {
      
    }
  },

};
</script>
<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .3rem
    top .2rem
    display: inline-block
    width: 1.2rem
    height: 1.2rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.2rem no-repeat
    margin-right: .3rem
    background-size: 1.2rem 9rem
  .item-title
    line-height 1.6rem
    font-size .9rem
    padding 0 .6rem
  .item-children
    padding 0 .6rem
</style>
