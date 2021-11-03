<template>
  <div class="discovery">
    <top-bar/>
    <home-swiper :banners="banners"/>
    <discovery-icon :icon="icon"/>
    <recommend :recommends="recommends"/>





  </div>
</template>

<script>
import TopBar from './childComps/TopBar'
import HomeSwiper from "./childComps/HomeSwiper"
import DiscoveryIcon from "./childComps/DiscoveryIcon"
import Recommend from "./childComps/Recommend"

import { getBannerData, getIconData, getRecommendData } from 'network/discovery'

export default {
  name: "Discovery",
  data() {
    return {
      banners: [],
      icon: [],
      recommends: []
    }
  },
  components: {
    TopBar,
    HomeSwiper,
    DiscoveryIcon,
    Recommend
  },
  created() {
    getBannerData().then(res => {
      // console.log(res);
      this.banners = res.data.banners
    }),
    getIconData().then(res => {
      // console.log(res);
      this.icon = res.data.data
    }),
    getRecommendData().then(res => {
      console.log(res);
      this.recommends = res.data.result
      this.recommends.length = 10
    })
  },
}
</script>

<style lang="less" scoped>

</style>