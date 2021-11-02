<template>
  <div class="main">
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name: "App",
  components: {
    MainTabBar
  }  
}
</script>
<style lang="less">

</style>
