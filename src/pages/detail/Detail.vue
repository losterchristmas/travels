<template>
  <div>
    <details-banner :sightName ="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></details-banner>
    <details-header></details-header>
    <div class="content">
      <details-list :list="list"></details-list>
    </div>
  </div>
</template>
<script>
import detailsBanner from "./components/Banner";
import detailsHeader from "./components/Header";
import detailsList from "./components/List";
import axios from "axios";
export default {
  name:"Detail",
  components: {
    detailsBanner,
    detailsHeader,
    detailsList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get("../static/mock/detail.json?",{
          params:{
            id: this.$route.params.id
          }
        })
        .then(this.getDetailSucc)
        .catch();
    },
    getDetailSucc(res){
        res = res.data
      if(res.ret && res.data){
        const data = res.data
        console.log(data);
        
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  },
};
</script>
<style lang="stylus" scoped>
.content 
  height: 50rem

</style>
 