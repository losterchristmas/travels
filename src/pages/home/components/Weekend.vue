<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in weekendArr" :key="index">
        <div class="item-img-wraper">
            <img class="item-img" :src="item.img" alt="item.title">
        </div>
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
	name: "weekend",
	props:{
		weekendArr:Array
	},
	data(){
		return{
		
		}
	}
};
</script>
<style lang="stylus" scoped>
@import '~__css__/mixins.styl';

.title 
  line-height 2.6rem
  margin-top 0.4rem
  text-indent 0.3rem
  background #eee
	.item-img-wraper
		height 0
		overflow hidden
		padding-bottom 33%
	.item-info
			flex 1
			padding .7rem
			.item-title
					line-height 1.6rem
					font-size 1rem
			.item-desc
					line-height 1.6rem
					font-size .8rem
					color #ccc
					ellipsis()
			.item-button
					background #ff9300
					padding 0 .6rem 
					border-radius .3rem
					line-height 1.4rem
					border #ff9300 
					color #ffffff
					margin-top .2rem
</style>
