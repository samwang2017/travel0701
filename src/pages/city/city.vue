<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letterPos="letterPos"></city-list>
        <alphabet :cities="cities" @letterClickFun="handleLetter"></alphabet>
    </div>
</template>
<script>
import CityHeader from 'pages/city/components/header'
import CitySearch from 'pages/city/components/search'
import CityList from 'pages/city/components/list'
import alphabet from 'pages/city/components/alphabet'
import axios from 'axios'
export default {
  name: 'CityPage',
  data () {
    return {
      hotCities: [],
      cities: {},
      letterPos: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    alphabet
  },
  methods: {
    listGetInfo () {
      axios.get('/api/city.json').then(this.listGetInfoDone)
    },
    listGetInfoDone (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handleLetter (e) {
    //   console.log(e.srcElement.innerText)
      this.letterPos = e
    }
  },
  mounted () {
    this.listGetInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
