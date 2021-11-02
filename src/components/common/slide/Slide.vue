<template>
  <div id="slide">
    <div
      class="slide"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style lang="less" scoped>
#slide {
  overflow: hidden;
  overflow-x: scroll;
  position: relative;
  font-size: 12px;
  .slide {
    display: flex;
    align-items: center;
    padding: 0 15px 10px 15px;
  }
}
</style>