<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from "./components/Header";
import homeSwiper from "./components/Swiper";
export default {
  components: {
    homeHeader,
    homeSwiper
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
