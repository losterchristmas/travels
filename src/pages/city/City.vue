<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <City-list></City-list>
    <City-alphabet></City-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  name: "City"
};
</script>
<style lang="stylus" scoped></style>
