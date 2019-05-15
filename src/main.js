import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueCarousel from 'vue-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueCarousel);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    this.$router.push("/");
  }
}).$mount('#app')

