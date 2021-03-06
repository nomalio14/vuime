import Vue from 'vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import credetials from '../config/credential'

//Firebase認証
Vue.config.productionTip = false

const firebaseConfig = credetials.firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Vuex)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

const authModule = {
  state: {
    signedIn: false
  },
  mutations: {
    signIn(state) {
      state.signedIn = true
    },
    signOut(state) {
      state.signedIn = false
    }
  }
}

const appModule = {
  state: {
    userData: [],
    approveRequest: []
  },
  actions: {
    loadUserdata({ commit }) {
      axios
        .get('http://127.0.0.1:4321/userdata')
        .then(response => {
          const userData = response.data
          commit('setUserData', userData)
        })
        .catch(error => console.log(error))
    },
    loadApproveRequest({ commit }) {
      axios
        .get('http://127.0.0.1:4321/approveRequest')
        .then(response => {
          const approveRequest = response.data
          commit('setApproveRequest', approveRequest)
        })
        .catch(error => console.log(error))
    }
  },

  mutations: {
    updateUserData(state, newUserInfo) {
      state.userData = newUserInfo
    },
    setUserData(state, userData) {
      state.userData = userData
    },
    updateApproveRequest(state, approveRequest) {
      state.approveRequest = approveRequest
    },
    setApproveRequest(state, approveRequest) {
      state.approveRequest = approveRequest
    }
  }
}

const store = new Vuex.Store({
  modules: {
    auth: authModule,
    app: appModule
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
