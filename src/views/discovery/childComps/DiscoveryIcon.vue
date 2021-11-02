<template>
  <div class="discovery-icon">
    <div class="icon-item" v-for="item in icon" :key="item">
      <img :src="item.iconUrl" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoveryIcon",
  props: {
    icon: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    // Slide,
    // SlideItem
  }
}
</script>

<style lang="less" scoped>
.discovery-icon {
  display: flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  // overflow: hidden;
  overflow-x: scroll;
  padding: 10px 15px;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  div:last-child {
    margin-right: 0;
  }
  .icon-item {
    margin-right: 25px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background-color: #fd403e;
      margin-bottom: 3px;
    }
  }
}
.discovery-icon::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>