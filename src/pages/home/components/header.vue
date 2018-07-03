<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      search citys day0702
    </div>
    <div class="header-right">
      XiaMen
      <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  color #ffffff
  background $bgColor
  line-height $headerHeight
  display flex
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    padding-left 0.2rem
    margin-left 0.2rem
    background-color #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0.1rem
    float right
    text-align center
    color #ffffff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
