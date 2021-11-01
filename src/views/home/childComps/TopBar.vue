<template>
  <div class="top-bar">
    <div class="icon-list top-left"></div>
    <div class="top-center">
      <ul>
        <li v-for="(item, index) in titles" :key="index" :class="{active: currentIndex === index}" @click="titleClick(index)">{{item}}</li>
      </ul>
    </div>
    <div class="icon-search top-right"></div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      titles: ['我的', '发现', '云村', '视频'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style scoped lang="less">
.top-bar {
  display: flex;
  text-align: center;
  align-items: center;
  height: 0.8rem;
  width: 7.5rem;
  color: #aaa;
  // background-color: #f00;
  .top-left, .top-right {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.2rem;
  }
  .top-center {
    flex: 1;
    ul {
      display: flex;
      width: 5rem;
      margin: 0 auto;
      li {
        flex: 1;
      }
      .active {
        font-weight: 700;
        color: #000;
        font-size: 0.26rem;
      }
    }
  }
}
</style>