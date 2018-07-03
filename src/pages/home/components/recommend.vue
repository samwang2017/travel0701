<template>
    <div>
        <div class="title">
            hot recommend
        </div>
        <ul>
            <li
            v-for="item of recommendList"
            class="item border-bottom"
            :key="item.id">
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <div class="item-button">show more</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title
    margin-top 0.2rem
    line-height 0.8rem
    background #eeeeee
    text-indent 0.2rem
.item
    height 1.9rem
    overflow hidden
    display flex
    .item-img
        width 1.7rem
        height 1.7rem
        padding 0.1rem
    .item-info
        flex 1
        padding 0.1rem
        min-width 0
        .item-title
            line-height 0.54rem
            font-style 0.32rem
            ellipsis()
        .item-desc
            line-height 0.4rem
            color #cccccc
            ellipsis()
        .item-button
            line-height 0.44rem
            margin-top 0.16rem
            background #ff9300
            padding 0 0.2rem
            border-radius 0.06rem
            color #fff
</style>
