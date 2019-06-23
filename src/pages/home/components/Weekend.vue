<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in listArr" :key="index">
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
	data(){
		return{
			listArr:[{
				img:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
				title:'浮在海上的绿洲',
				desc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
				url:''
			},{
				img:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
				title:'清远周边逛',
				desc:'人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
				url:''
			},{
				img:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
				title:'欢乐长隆',
				desc:'世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验',
				url:''
			},{
				img:'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
				title:'浮在海上的绿洲',
				desc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
				url:''
			},{
				img:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
				title:'阳江温泉知多少',
				desc:'这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉',
				url:''
			},{
				img:'http://img1.qunarzz.com/sight/source/1505/3c/96128de07fdd2f.jpg_r_640x214_4505bca3.jpg',
				title:'中山必游TOP10',
				desc:'国父故乡，革命起源地',
				url:''
			}]
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
