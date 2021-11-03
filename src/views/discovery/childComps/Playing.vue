<template>
  <div class="playing">
    <slide>
      <template v-slot:top-left>
        直播 · 领黑胶会员
      </template>
      <template v-slot:top-more>
        更多
        <span class="iconfont icon-jiantou1"></span>
      </template>
      <slide-item v-for="item in playing" :key="item">
        <img :src="item.avatarUrl" alt="">
        <span class="iconfont icon-bofang play">{{(item.userFollowedCount/10000).toFixed(1)}}万</span>
        <div class="name">{{item.nickName}}</div>
      </slide-item>
    </slide>
  </div>
</template>

<script>
import {Slide, SlideItem} from "components/common/slide"
export default {
  name: "Playing",
  props: {
    playing: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Slide,
    SlideItem
  }
}
</script>

<style lang="less" scoped>
.playing {
  background-color: #fff;
  margin: 10px 0;
  border-radius: 10px;
}
span {
  font-size: 12px;
}
img {
  height: 106px;
  border-radius: 10px;
}
.play {
  position: absolute;
  top: 3px;
  right: 3px;
  color: #fff;
  background-color: rgba(100, 100, 100, .7);
  padding: 3px;
  border-radius: 12px;
}
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow:hidden;
  -webkit-box-orient: vertical;
  font-size: 12px;
}
</style>