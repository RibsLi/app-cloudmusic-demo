<template>
  <div class="main">
    <home/>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "views/home/Home"

export default {
  name: "App",
  components: {
    Home
  }  
}
</script>
<style lang="less">

</style>
