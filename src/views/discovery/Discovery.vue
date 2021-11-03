<template>
  <div class="discovery">
    <top-bar/>
    <home-swiper :banners="banners"/>
    <discovery-icon :icon="icon"/>
    <recommend :recommends="recommends"/>
    <playing :playing="playing"/>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>




  </div>
</template>

<script>
import TopBar from './childComps/TopBar'
import HomeSwiper from "./childComps/HomeSwiper"
import DiscoveryIcon from "./childComps/DiscoveryIcon"
import Recommend from "./childComps/Recommend"
import Playing from "./childComps/Playing"

import { getBannerData, getIconData, getRecommendData, getDjData } from 'network/discovery'

export default {
  name: "Discovery",
  data() {
    return {
      banners: [],
      icon: [],
      limit: null,
      recommends: [],
      playing: []
    }
  },
  components: {
    TopBar,
    HomeSwiper,
    DiscoveryIcon,
    Recommend,
    Playing
  },
  created() {
    // 轮播数据
    getBannerData().then(res => {
      // console.log(res);
      this.banners = res.data.banners
    }),
    // icon图标数据
    getIconData().then(res => {
      // console.log(res);
      this.icon = res.data.data
    }),
    // 推荐歌单数据
    getRecommendData(this.limit = 10).then(res => {
      // console.log(res);
      this.recommends = res.data.result
    }),
    // 24小时主播榜数据
    getDjData(this.limit = 10).then(res => {
      console.log(res);
      this.playing = res.data.data.list
    })
  },
}
</script>

<style lang="less" scoped>

</style>