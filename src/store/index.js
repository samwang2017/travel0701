// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
    state: {
        city: 'Shantou'
    },
    actions: {
        changeCity(context, city) {
            context.commit('changedCity', city)
        }
    },
    mutations: {
        changedCity(state, city) {
            state.city = city
        }
    }
})