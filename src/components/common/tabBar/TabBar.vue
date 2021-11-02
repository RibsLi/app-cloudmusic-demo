<template>
  <!-- 底部TabBar大组件 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
#tab-bar {
  display: flex;
  text-align: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>