import Vue from "vue/dist/vue.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "./public.css";
import appheader from "./components/appheader.vue";
import pack from "./components/pack.vue";
import hotbuy from "./components/hotbuy.vue";

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
const app = new Vue({
    el: "#app",
    data: {
      data:{a:5},
      hotdata:null
    },
    created:function(){
    this.getaxios({a:1});
    this.getaxios({a:3});
    },
    methods:{
      getaxios:function(x){                     //x：传入参数对象    data：返回数据对象
        this.axios.get("/data", {
        params: x
      })
      .then((response)=>{
        if(response.status>=200 && response.status<=300 || response.status==304){ 
            if(x.a==1){
              this.data=response.data;
            }else if(x.a==3){
              this.hotdata=response.data;
            }
      
      }
      })}
    },
    components: {
      appheader,
      pack,
      hotbuy
    },
  });