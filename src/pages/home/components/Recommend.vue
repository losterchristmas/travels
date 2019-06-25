<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
			<router-link :to="'/detail/'+item.url"  tag="li"  class="item border-bottom" v-for="(item,index) in hotArr" :key="index">
				<img class="item-img" :src="item.img" alt="item.title">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
    </ul>
  </div>
</template>
<script>
export default {
	name: "recommend",
	props:{
		hotArr:Array
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
	.item
		display flex
		overflow hidden
		// height 3rem
		.item-img
			width 7rem
			height  5rem
			padding .4rem .2rem 
		.item-info
			flex 1
			padding .4rem .1rem
			margin-left .2rem
			.item-title
				line-height 1.6rem
				font-size 1rem
			.item-desc
				width 50%
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
