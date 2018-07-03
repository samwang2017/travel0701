<template>
    <div class="list">
        <ul>
            <li
            v-for="(items,key) in cities"
            :key="key"
            class="item"
            :ref="key"
            @click='letterClick'
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            >
            {{key}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  updated (e) {
    this.startY = this.$refs['A'][0].offsetTop
    // console.log(this.startY)
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    letterClick (e) {
      //   console.log(e)
      this.$emit('letterClickFun', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - this.startY) / 20)
        // console.log(this.letters[index])
        // this.letterClick(this.letters[index])
        this.$emit('letterClickFun', this.letters[index])
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width 0.4rem
    display flex
    flex-direction column
    justify-content center
    .item
        color $bgColor
        line-height 0.4rem
        text-align center
</style>
