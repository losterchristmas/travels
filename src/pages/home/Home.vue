<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import homeHeader from "./components/Header";
import homeSwiper from "./components/Swiper";
import homeIcons from "./components/Icons";
export default {
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
