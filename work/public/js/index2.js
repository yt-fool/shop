import Vue from 'vue/dist/vue.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../css/b.css';
import appheader from './components/appheader.vue';
import pack from './components/pack.vue';
import hotbuy from './components/hotbuy.vue';

Vue.use(ElementUI);

const main = new Vue({
  el: '#app',
  data: {
    data: null,
  },
  components: {
    appheader,
    pack,
    hotbuy,
  },
});
