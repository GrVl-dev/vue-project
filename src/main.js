import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase/app'
import 'firebase/auth'
import vuetify from './plugins/vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'

Vue.config.productionTip = false
Vue.component('app-buy-modal', BuyModalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCQCk4n--timTdyv99iKdz2fpr2-CN06FI',
      authDomain: 'itc-ads-4c113.firebaseapp.com',
      databaseURL: 'https://itc-ads-4c113.firebaseio.com',
      projectId: 'itc-ads-4c113',
      storageBucket: 'itc-ads-4c113.appspot.com',
      messagingSenderId: '914137803520',
      appId: '1:914137803520:web:77c2646fa9e9de51a221e5',
      measurementId: 'G-TW7X4LTQY8'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
