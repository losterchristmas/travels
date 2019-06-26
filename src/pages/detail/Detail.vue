<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <div class="content"></div>

  </div>
</template>
<script>
import detailsBanner from "./components/Banner";
import detailsHeader from "./components/Header";
export default {
  components: {
    detailsBanner,
    detailsHeader
  }
};
</script>
<style lang="stylus" scoped>
  .content 
    height 50rem
</style>
