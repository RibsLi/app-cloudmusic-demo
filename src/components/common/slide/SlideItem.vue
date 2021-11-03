<template>
  <div class="slide-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SlideItem",
};
</script>

<style scoped>
.slide-item {
  width: 106px;
  margin-right: 10px;
  position: relative;
}
.slide-item:last-child {
  margin-right: 0;
}
.slide-item img {
  height: 106px;
}
</style>
