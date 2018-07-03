import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/home/home'
Vue.use(Router)
/* eslint-disable */
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
