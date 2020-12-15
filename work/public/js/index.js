import Vue from 'vue/dist/vue.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../css/a.css";

Vue.use(ElementUI);





fetch("/data?a=1").then(response=>{                                               //获取网页品类数据
    if(response.status>=200 && response.status<=300 || response.status==304){
    response.text().then((data)=>{  
        let jn=JSON.parse(data);
        dispose(jn);
        })
}else{
    alert(response.status);
}
})

function dispose(data){                                                    //品类数据传给vue实例,并生成组件标签(main实例)  
    let main=new Vue({
        el:"#app",
    data:{
      data:data,
    },
    components:{
       pack,
       appheader,
    }
    });
    let aside=new Vue({
        el:"aside",
        data:{
             sdata:[],
             hdata:[],
             but:"but"
        },
        created:function(){
            fetch("/data?a=3").then(response=>{                                               //获取网页品类数据
                if(response.status>=200 && response.status<=300 || response.status==304){
                response.text().then((data)=>{  
                        this.hdata=JSON.parse(data);
                        for(let i=0;i<this.hdata.length;i++){
                            this.hdata[i].snum=i+1;
                        }
                })
            }
        })
        },
        components:{
            shopcar,
            hotbuy,
         }
    });
    }                                                                         
