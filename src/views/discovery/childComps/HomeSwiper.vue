<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.url">
          <img :src="item.imageUrl" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less" scoped>
.home-swiper {
  padding: 10px 15px;
  height: 135px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>