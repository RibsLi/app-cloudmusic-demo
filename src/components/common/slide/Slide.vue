<template>
  <div class="slide">
      <div class="top">
        <div class="top-left"><slot name="top-left"></slot></div>
        <div class="top-more"><slot name="top-more"></slot></div>
      </div>
      <div class="wrapper">
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
.slide {
  padding: 10px 0 20px 0;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 45px;
  line-height: 45px;
}
.top-left {
  font-weight: 600;
}
.top-more {
  border: 1px solid #eee;
  height: 20px;
  line-height: 20px;
  padding: 1px 8px;
  font-size: 12px;
  text-align: center;
  border-radius: 15px;
  span {
    font-size: 12px;
  }
}
.wrapper {
  display: flex;
  flex-flow: nowrap;
  overflow: hidden;
  overflow-x: scroll;
  padding: 0 15px;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.wrapper::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>