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
  flex-shrink: 0;
  margin-right: 25px;
  text-align: center;
  /* justify-content: space-between; */
}
</style>
