<template>
  <div class="header">
    城市选择
    <div>
			<router-link to="./">  
				<div class="header-left">
					<span class="iconfont header-back">&#xe6a4;</span>
				</div>
			</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~__css__/iconfont/varible.styl';
	.header
		height: $headerHerght
		line-height: $headerHerght
		overflow: hidden
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .9rem
		.header-back
			width 2.6rem
			text-align center
			position absolute
			top 0
			left 0
		.header-left
			color #fff
</style>
