<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="searchInput" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search_content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) in list" :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom text-center" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: "CitySearch",
  props:{
    city:Array
  },
  data() {
    return {
      keyword:'',
      list:[],
      timer:null,
    }
  },
  computed:{
    hasNoData(){
      return !this.list.length
    }
  },
  watch: {
    keyword(){
      if(this.timer)
        clearTimeout(this.timer)
      if(!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result=[]
        for(let i in this.city){
          this.city[i].list.forEach(value => {
            if(value.name.indexOf(this.keyword)>-1||value.pinyin.indexOf(this.keyword)>-1){
              result.push(value)
            }
          });
        }
        this.list = result
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods:{
    handleCityClick(item){
			this.changCity(item)
			this.$router.push('/')
		},
		...mapMutations(['changCity'])
	},
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
    .search_content
      overflow hidden
      z-index 1
      position absolute
      top 4.5rem
      left 0
      right 0
      bottom 0
      background #eee
      .search-item
        padding .5rem
        line-height 1.4rem
        color #666
        background #fff
      .text-center
        text-align center
</style>
