<template>
  <div class="discovery">
    <top-bar/>
    <home-swiper :banners="banners"/>
    <discovery-icon :icon="icon"/>
  </div>
</template>

<script>
import TopBar from './childComps/TopBar'
import HomeSwiper from "./childComps/HomeSwiper"
import DiscoveryIcon from "./childComps/DiscoveryIcon"

import { getBannerData, getIconData } from 'network/discovery'

export default {
  name: "Discovery",
  data() {
    return {
      banners: [],
      icon: []
    }
  },
  components: {
    TopBar,
    HomeSwiper,
    DiscoveryIcon
  },
  created() {
    getBannerData().then(res => {
      // console.log(res);
      this.banners = res.data.banners
    }),
    getIconData().then(res => {
      console.log(res);
      this.icon = res.data.data
    })
  },
}
</script>

<style lang="less" scoped>

</style>