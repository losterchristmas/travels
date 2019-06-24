<template>
  <div class="list wrapper" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>		
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>		
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>		
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>		
					<div class="button-wraper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
					<div class="item-list">
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
					</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
					<div class="item-list">
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
					</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
					<div class="item-list">
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
					</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
					<div class="item-list">
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
						<div class="item border-bottom">阿拉尔</div>
					</div>
			</div>
		</div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
	name: "CityList",
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper)

	},
};
</script>
<style lang="stylus" scoped>
	@import '~__css__/iconfont/varible.styl';
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
	&:before
		border-color:#ccc 
	.list
		overflow hidden
		position absolute
		top 4.5rem
		bottom 0 
		left 0
		right 0
		.title
			line-height 1.6rem
			background #eee
			padding-left .6rem
			color #666666
			font-size .6rem
		.button-list
			padding .2rem
			overflow hidden
			.button-wraper
				float left
				width 33.33%
				.button
					margin .4rem
					line-height 1.5rem
					text-align center
					border .04rem solid #ccc
		.item-list
			.item
				line-height 2rem
				padding-left .6rem
</style>
