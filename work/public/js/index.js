import Vue from 'vue/dist/vue.js'
import pack from './components/pack.vue';
import shopcar from './components/shopcar.vue';
import hotbuy from './components/hotbuy.vue';
import "../css/a.css";
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
        el:"main",
    data:{
      data:data,
    },
    components:{
       pack
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
                        for(i=0;i<this.hdata.length;i++){
                            console.log(i);
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
