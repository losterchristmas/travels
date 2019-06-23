<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import homeHeader from "./components/Header";
import homeSwiper from "./components/Swiper";
import homeIcons from "./components/Icons";
import homeRecommend from "./components/Recommend";
export default {
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
