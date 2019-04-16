import Vue from 'vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    userData: {
      name: 'Noma Yuma',
      email: 'nomalio@gmail.com',
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
  }
  },
  mutations: {
    updateUserData(state, newUserInfo) {
      state.userData = newUserInfo;
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
