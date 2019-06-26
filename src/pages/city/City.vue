<template>
  <div>
    <City-header></City-header>
    <City-search :city='this.city'></City-search>
    <City-list :hotCity='this.hotCity' :city='this.city' :letter='letter'></City-list>
    <City-alphabet :city='this.city' @change='handleLetterChange' ></City-alphabet>
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
      hotCity: [],
      letter:'',
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/static/mock/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret) {
        this.hotCity = res.hotCity;
        this.city = res.city;
      }
    },
    handleLetterChange(e){
        console.log(e)
        this.letter = e
    }
  }
};
</script>
<style lang="stylus" scoped></style>
