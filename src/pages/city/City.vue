<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <City-list :hotCity='this.hotCity' :city='this.city'></City-list>
    <City-alphabet :city='this.city'></City-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  name: "City",
  mounted() {
    this.getCityInfo();
  },
  data() {
    return {
      city: [],
      hotCity: []
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret) {
        this.hotCity = res.hotCity;
        this.city = res.city;
        console.log(this.hotCity)
        console.log(this.city )
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
