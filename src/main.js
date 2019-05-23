import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$axios = axios
Vue.config.productionTip = false;
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
