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
       "pack":pack
    }
    });
    let aside=new Vue({
        el:"aside",
        data:{
             sdata:[],
             hdata:[],
             but:"but"
        },
        beforeDestroy:function(){
            eventHub.$off('clicktwo');
            eventHub.$off("clicksi");
            eventHub.$off("clickba");
            eventHub.$off("clickjiu");
        },
        created:function(){
            eventHub.$on("clickjiu",()=>{
                this.but="but";
            });
            eventHub.$on("clickba",()=>{
                this.but="but1";
            });
            eventHub.$on("clicktwo",(num,db,id)=>{
                let j=false;
                for(let i=0;i<this.sdata.length;i++){
                   if(this.sdata[i].name==db.name){
                       this.sdata[i].uid=id;
                    this.sdata[i].unum=num;
                      j=true;
                   }
                }
                if(!j){
                   db.uid=id;
                   db.unum=num;
                    this.sdata.push(db);
                }
            });
            eventHub.$on("clicksi",(uname)=>{
                let index=0;
               for(let i=0;i<this.sdata.length;i++){
                   if(this.sdata[i].name==uname){
                       index=i;
                   }
               }
               let v=this.sdata.splice(index,1);
            });
            fetch("/data?a=3").then(response=>{                                               //获取网页品类数据
                if(response.status>=200 && response.status<=300 || response.status==304){
                response.text().then((data)=>{  
                        this.hdata=JSON.parse(data);
                        for(i=0;i<this.hdata.length;i++){
                            this.hdata[i].snum=i+1;
                        }
                })
            }
        })
        },
        components:{
            "buy":buy,
            "shop":shop
         }
    });
    }    
                                                                         
//组件注册
let eventHub= new Vue();                                            //事件中心，用于传递事件                                            
let shopp={                                           //商品块组件
    props:["uid"],
    data:function(){
        return{
           src:"null",
           num:0
    }
    },
    beforeDestroy:function(){
        eventHub.$off("clickliu-"+this.$attrs.item.name);
    },
    created:function(){
        eventHub.$on("clickliu-"+this.$attrs.item.name,(n)=>{
            this.num=n;
        });
    },
    methods:{
        url:function(){
            return"../img/"+this.uid+"/"+this.$attrs.item.id+".jpg";
        },
        add:function(){
            if(this.num==0){
                eventHub.$emit("clickba");
            }
            this.num++;
            eventHub.$emit("clickone-"+this.uid,this.num,this.$attrs.item.id);
            eventHub.$emit("clickwu"+this.$attrs.item.name,this.num);
            eventHub.$emit("clickqi"+this.$attrs.item.name,this.num);
        },
        ajj:function(){
                this.num--;
                if(this.num==0){
                    eventHub.$emit("clickjiu");
                }
                eventHub.$emit("clickone-"+this.uid,this.num,this.$attrs.item.id);
                eventHub.$emit("clickwu"+this.$attrs.item.name,this.num);
                eventHub.$emit("clickqi"+this.$attrs.item.name,this.num);
        }
    },
   template:"<div class='shopp' ><img :src='url()' alt='商品图片'><h4>{{$attrs.item.name}}</h4><h4>'单价:'<span>{{$attrs.item.price}}/{{$attrs.item.unit}}</span></h4><button v-if='num!=0' @click='ajj'>-</button>{{num}}<button v-if='num!=$attrs.item.num'  @click='add'>+</button><h6 v-if='num==$attrs.item.num'>库存不足</h6></div>",
};

let pack= {                                                            //品类栏组件
    data:function(){
        return{
            shoppdata:[],
            num:1,
            num1:0
        }
    },
    methods:{
        onclick1:function(){
            this.num--;
            fetch("/data?a=2&&b="+this.$attrs.item.id+"&&c="+this.num).then(response=>{                                               //获取网页品类数据
                if(response.status>=200 && response.status<=300 || response.status==304){
                response.text().then((data)=>{  
                        this.shoppdata=JSON.parse(data);
                })
            }
        })
        },
        onclick2:function(){
            this.num++;
            fetch("/data?a=2&&b="+this.$attrs.item.id+"&&c="+this.num).then(response=>{                                               //获取网页品类数据
                if(response.status>=200 && response.status<=300 || response.status==304){
                response.text().then((data)=>{  
                    this.shoppdata=JSON.parse(data);
                })
            }
        })
        }
    },
    beforeDestroy:function(){
        eventHub.$off("clickone-"+this.$attrs.item.id);
    },
    created:function(){
        this.num1=this.$attrs.item.knum%5==0?this.$attrs.item.knum/5:parseInt(this.$attrs.item.knum/5+1);
        fetch("/data?a=2&&b="+this.$attrs.item.id+"&&c=1").then(response=>{                                            
            if(response.status>=200 && response.status<=300 || response.status==304){
            response.text().then((data)=>{  
                this.shoppdata=JSON.parse(data);
            })
        }
    })
    eventHub.$on("clickone-"+this.$attrs.item.id,(num,id)=>{
        eventHub.$emit("clicktwo",num,this.shoppdata[id-1],this.$attrs.item.id);
    })
    },
    template:"<section><h3>{{ $attrs.item.name }}</h3><div class='pack'><shopp :uid='$attrs.item.id' :item='item' v-for='item in this.shoppdata' :key=shoppdata.id></shopp></div><button v-if='num!=1'  @click='onclick1'>-</button>{{num+'/'+num1}}<button v-if='num!=num1'  @click='onclick2'>+</button></section>",
    components:{
        "shopp":shopp,
    }
};

let buy={                                                    //购物车组件 
    data:function(){
        return{
            number:1,
        }
    },
    created:function(){
        eventHub.$on("clickwu"+this.$attrs.item.name,(knum)=>{
            this.number=knum;
            if(knum==0){   
                eventHub.$emit("clicksi",this.$attrs.item.name);
            }
        });
    },
    beforeDestroy:function(){
        eventHub.$off("clickwu");
    },
    methods:{
        url:function(){
            return "img/"+this.$attrs.item.uid+"/"+this.$attrs.item.id+".jpg";
        },
        del:function(){
        console.log("asd");
        }
    },
template:" <div class='shop2'><div><img :src='url()' alt='商品图片'></div><h6>{{$attrs.item.name}}</h6><div><h6>单价</h6><h6>{{$attrs.item.price}}元/{{$attrs.item.unit}}</h6></div><div><h6>数量</h6><h6>{{number}}</h6></div><div><h6>总价</h6><h6>{{number*$attrs.item.price}}元</h6></div><button @click='del'>删除</button></div>"
};
let shop={                                                         //特卖栏组件
    data:function(){
        return{
            num:0
        }
    },
    beforeDestroy:function(){
        eventHub.$off("clickqi"+this.$attrs.item.name);
    },
    created:function(){
        eventHub.$on("clickqi"+this.$attrs.item.name,(n)=>{
            this.num=n;
        });
    },
    methods:{
        url:function(){
            return "img/"+this.$attrs.item.uid+"/"+this.$attrs.item.id+".jpg";
        },
        add:function(){
            this.num++;
            eventHub.$emit("clickliu-"+this.$attrs.item.name,this.num);
            eventHub.$emit("clickwu"+this.$attrs.item.name,this.num);
            if(this.num==1){
            eventHub.$emit("clicktwo",this.num,this.$attrs.item,this.$attrs.item.uid);
        }
        },
        ajj:function(){
                this.num--;
                eventHub.$emit("clickliu-"+this.$attrs.item.name,this.num);
                eventHub.$emit("clickwu"+this.$attrs.item.name,this.num);
                if(this.num==0){   
                    eventHub.$emit("clicksi",this.$attrs.item.name);
                }
        }
    },
    template:"<div class='shop1'><h3>{{$attrs.item.snum}}</h3><div><img :src='url()' alt='商品图片'></div><h6>{{$attrs.item.name}}</h6><div><h6>单价</h6><h6>{{$attrs.item.price}}元/{{$attrs.item.unit}}</h6></div><div><h6>数量</h6><button id='sadd1' @click='ajj'>-</button>{{num}}<button id='sminus1' @click='add'>+</button></div></div>"
}