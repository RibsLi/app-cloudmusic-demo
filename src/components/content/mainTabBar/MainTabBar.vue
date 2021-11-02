<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path='/discovery'>
        <template v-slot:item-icon >
          <div class="iconfont icon-logo-dark1-copy"></div>
        </template>
        <template v-slot:item-text>
          <div>发现</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/podcast'>
        <template v-slot:item-icon>
          <div class="iconfont icon-guanzhu"></div>
        </template>
        <template v-slot:item-text>
          <div>播客</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template v-slot:item-icon>
          <div class="iconfont icon-yinle"></div>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/attention'>
        <template v-slot:item-icon>
          <div class="iconfont icon-lianxiren"></div>
        </template>
        <template v-slot:item-text>
          <div>关注</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cloud'>
        <template v-slot:item-icon>
          <div class="iconfont icon-m"></div>
        </template>
        <template v-slot:item-text>
          <div>云村</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBar/TabBarItem'
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less" scoped>

</style>