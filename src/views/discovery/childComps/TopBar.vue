<template>
  <div class="top-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="iconfont icon-liebiao"></div>
      </template>
      <template v-slot:center>
        <div class="top-search">
          <i class="iconfont icon-sousuo"></i>
          <span>新人必听</span>
        </div>
      </template>
      <template v-slot:right>
        <div class="iconfont icon-tinggeshiqu"></div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: "TopBar",
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.top-bar {
  background-color: #fff;
  .top-search {
    background-color: rgb(247, 242, 242);
    height: 34px;
    line-height: 34px;
    margin: auto 13px;
    border-radius: 16px;
    position: relative;
    i, span {
      font-size: 14px;
      color: #aaa;
    }
    i {
      margin-right: 5px;
    }
  }
}
</style>