<template>
    <div
    class="list"
    @click="handleClick"
    ref="wrapper"
    >
        <div>
            <div class="area">
                <div class="title">location</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city    }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">hotcitys</div>
                <div class="button-list">
                    <div
                    class="button-wrapper"
                    v-for="items of hotCities"
                    :key="items.id"
                    >
                        <div class="button">{{items.name}}</div>
                    </div>
                </div>
            </div>
            <div
            class="area"
            v-for="(items,key) in cities"
            :key="key"
            >
                <div class="title">{{key}}</div>
                <div class="item-list">
                    <div
                    class="item-wrapper"
                    v-for="item of items"
                    :key="item.id"
                    >
                        <div class="item">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  methods: {
    handleClick () {
      console.log(88654)
    }
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
        background #eeeeee
        line-height 0.54rem
        padding-left 0.2rem
        color #666
        font-style 0.26rem
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wrapper
            width 33.3%
            float left
            .button
                border 0.02rem solid #cccccc
                padding 0.1rem 0
                text-align center
                margin 0.1rem
                border-radius 0.06rem
    .item-list
        .item
            line-height 0.76rem
            padding-left 0.2rem
</style>
