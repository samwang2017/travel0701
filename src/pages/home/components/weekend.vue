<template>
    <div>
        <div class="title">weekend</div>
        <ul>
            <li
                v-for="item of weekendList"
                :key="item.id"
                class="item"
            >
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    text-indent 0.2rem
    line-height 0.8rem
    background #cccccc
.item-img-wrapper
    height 0
    padding-bottom 37.2%
    overflow hidden
    .item-img
        width 100%
.item-info
    padding 0.1rem
    .item-title
        line-height 0.54rem
        font-style 0.32rem
        ellipsis()
    .item-desc
        line-height 0.4rem
        color #cccccc
        ellipsis()
</style>
