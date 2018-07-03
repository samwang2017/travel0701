<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title" v-on:click="titleClickTest">location</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title"

                >hot citys</div>
                <div class="button-list">
                    <div class="button-wrapper"
                    v-for="item of hotCities"
                        :key="item.id"
                        @click="saveCity(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
            class="area"
            v-for="(items,key) in cities"
            :key="key"
            :ref="key"
            >
                <div class="title">{{key}}</div>
                <div class="item-list">
                    <div
                    class="item"
                    v-for="item of items"
                    :key="item.id"
                    @click="itemSaveCity"
                    >{{item.name}}</div>
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
    cities: Object,
    letterPos: String
  },
  methods: {
    saveCity (city) {
      //   console.log(555)
      console.log('???')
      //   this.$store.dispatch('changeCity', city)
    },
    itemSaveCity () {
      console.log(888)
    },
    titleClickTest () {
      console.log('what ???')
    }
  },
  watch: {
    letterPos () {
      if (this.letterPos) {
        const moveToElement = this.$refs[this.letterPos][0]
        this.scroll.scrollToElement(moveToElement)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
        font-size 0.26rem
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wrapper
            width 33.3%
            float left
            .button
                border 0.02rem solid #ccc
                padding 0.1rem 0
                text-align center
                margin 0.1rem
                border-radius 0.06rem
    .item-list
        .item
            line-height 0.76rem
            padding-left 0.2rem
</style>
