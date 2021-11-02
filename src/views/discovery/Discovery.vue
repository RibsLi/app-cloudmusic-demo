<template>
  <div class="discovery">
    <top-bar/>
    <home-swiper/>
  </div>
</template>

<script>
import TopBar from './childComps/TopBar'
import HomeSwiper from "./childComps/HomeSwiper"

export default {
  name: "Discovery",
  components: {
    TopBar,
    HomeSwiper
  }
}
</script>

<style lang="less" scoped>

</style>