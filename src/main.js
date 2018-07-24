import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import wysiwyg from 'vue-wysiwyg'
import "../node_modules/vue-wysiwyg/dist/vueWysiwyg.css";
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(Vuetify)
Vue.use(wysiwyg, {
  maxHeight: "800px"
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
