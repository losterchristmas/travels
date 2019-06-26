<template>
  <div>
    <details-banner></details-banner>
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
export default {
  components: {
    detailsBanner,
    detailsHeader,
    detailsList
  },
  data() {
    return {
      list:[{
        title:'成人一馆',
        children:[{
          title:'成人二馆',
          children:[{
            title:'成人三馆'
          }]
        }]
      },{
        title:'儿童一馆',
        children:[{
          title:'儿童二馆',
          children:[{
            title:'儿童三馆'
          }]
        }]
      },{
        title:'合家欢一馆',
        children:[{
          title:'合家欢二馆',
          children:[{
            title:'合家欢三馆'
          }]
        }]
      }

      ]
    }
  },
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
 