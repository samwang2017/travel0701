<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-content">
                    </div>
                    <div class="icon-desc">{{item.desc}}</div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((element, index) => {
        const listIndex = Math.floor(index / 8)
        if (!pages[listIndex]) {
          pages[listIndex] = []
        }
        pages[listIndex].push(element)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.wrapper
    margin-top 0.1rem
    .icon
        position relative
        width 25%
        height 0
        padding-bottom 25%
        overflow hidden
        float left
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom 0.44rem
            padding 0.1rem
            box-sizing border-box
            .icon-img-content
                height 100%
                display block
                margin 0 auto
        .icon-desc
            position absolute
            bottom 0
            left 0
            right 0
            height 0.44rem
            line-height 0.44rem
            text-align center
            color $darkTextColor
            ellipsis()
</style>
