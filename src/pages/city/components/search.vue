<template>
    <div>
        <div class="search">
            <input
            type="text"
            placeholder="where you want to go"
            class="search-input"
            v-model="keyword"
            >
        </div>
        <div class="search-content" v-show="showIF">
            <ul>
                <li
                v-for="(item,index) of searchList"
                class="search-item"
                :key="index"
                @click="searchSaveCity(item)"
                >
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      searchList: []
    }
  },
  methods: {
    searchSaveCity (city) {
      this.$store.dispatch('changeCity', city)
      console.log(885533)
    }
  },
  computed: {
    showIF () {
      return this.keyword.length
    }
  },
  watch: {
    keyword () {
      const result = []
      for (let i in this.cities) {
        this.cities[i].forEach(element => {
          if (
            element.spell.indexOf(this.keyword) > -1 ||
            element.name.indexOf(this.keyword) > -1
          ) {
            result.push(element.name)
          }
        })
      }
      if (result.length === 0) {
        result.push('no result found')
      }
      this.searchList = result
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
    height 0.72rem
    background $bgColor
    padding 0 0.1rem
    .search-input
        width 100%
        height 0.62rem
        box-sizing border-box
        padding 0 0.1rem
        line-height 0.62rem
        text-align center
        border-radius 0.06rem
        color #666666
.search-content
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eeeeee
    .search-item
        background #ffffff
        color #666666
        padding-left 0.2rem
        line-height 0.62rem
</style>
