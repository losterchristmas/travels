<template>
  <div class="list">
    <ul>
      <li class="item" v-for="(item,index) in this.city" :key="index">{{item.initial}}</li>
    </ul>
  </div>
</template>
<script>
export default {
	name: "CityAlphabet",
	props:{
		city:Array
	}
};
</script>
<style lang="stylus" scoped>
	@import '~__css__/iconfont/varible.styl';
	.list
		position absolute
		top 4.5rem
		right 0
		bottom 0
		width 1.4rem
		display flex
		flex-direction column
		justify-content center
		.item
			text-align center
			color $bgColor
			line-height 1.2rem
</style>
