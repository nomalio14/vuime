import Vue from 'vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    userData: [],
    approveRequest: []
  },
  actions: {
    loadUserdata ({ commit }) {
      axios
        .get('http://127.0.0.1:4321/userdata')
        .then(response => {
        const userData = response.data
        commit('setUserData', userData)
        })
        .catch(
          error => (
            console.log(error)
          )
        )
    },
    loadApproveRequest ({ commit }) {
      axios
        .get('http://127.0.0.1:4321/approveRequest')
        .then(response => {
        const approveRequest = response.data
        commit('setApproveRequest', approveRequest)
        })
        .catch(
          error => (
            console.log(error)
          )
        )
    },
  },

  mutations: {
    updateUserData(state, newUserInfo) {
      state.userData = newUserInfo;
    },
    setUserData(state, userData) {
      state.userData = userData
    },
    updateApproveRequest(state, approveRequest) {
      state.approveRequest = approveRequest;
    },
    setApproveRequest(state, approveRequest) {
      state.approveRequest = approveRequest
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
