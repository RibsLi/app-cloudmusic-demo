<template>
  <!-- 底部TabBaritem小组件 -->
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" :class="{active: isActive}">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#fd403e",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  color: #b6b4b5;
  margin-top: 5px;
  .item-icon {
    width: 27px;
    height: 27px;
    line-height: 27px;
    margin: auto;
    margin-bottom: 2px;
  }
  .active {
    color: #fff;
    background-color: #fd403e;
    border-radius: 100%;
  }
}
</style>