

<template>
    <section :id="packitem.id"><h3>{{ packitem.name }}</h3>
    <div class="pack" >
       <shopblock v-for="(item,index) in data" :key="index" :shopitem="item" :packid="packitem.id" ></shopblock>
        </div>
        <span>
        <el-button-group>
         <el-button type="primary" icon="el-icon-arrow-left" @click="pagenum(1)" :disabled="pageago">上一页</el-button>
        </el-button-group>
               {{num+"/"+page}}
         <el-button-group>
         <el-button type="primary" icon="el-icon-arrow-left" @click="pagenum(2)" :disabled="pagelater">下一页</el-button>
        </el-button-group>
        </span>                                                              
           </section>
</template>

<script>
import shopblock from "./shopblock.vue";
export default {
     data:function(){
        return{
            data:null,                    //存放商品数据
            page:0,                         //存放当前品类栏总页数
            num:1,                            //存放当前页数
            pageago:true,
            pagelater:true,
        }
    },
    props:["packitem"],
     methods:{
        shopaxios:function(){
        this.axios.get("/data", {
          params: {a:2,b:this.packitem.id,c:this.num}
        })
        .then((response)=>{
          if(response.status>=200 && response.status<=300 || response.status==304){       
          this.data=response.data;
          if(this.num!=1){
            this.pageago=false;
          }else{
            this.pageago=true;
          };
          if(this.num!=this.page){
            this.pagelater=false;
          }else{
            this.pagelater=true;
          };
        }
        })
      },
       pagenum:function(x){
       if(x==1){
         --this.num;
         this.shopaxios();
       }else if(x==2){
         ++this.num;
         this.shopaxios();
       }
       },
    },
    created:function(){
        this.page=this.packitem.knum%5==0?this.packitem.knum/5:parseInt(this.packitem.knum/5+1);
        this.shopaxios();
    },
    components:{
       shopblock,
    }
}
</script>

<style scoped>
section{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;
}
h3{
    margin-top: 5px;
    border-radius: 30px;
    border: 1px solid;
    box-shadow:2px 4px 0px 4px rgba(0, 0, 0, .12);
    height: 50px;
    width: 100%;
    font-size: 2em;
    text-align:center;
}
.pack{
    display: flex;
    justify-content: space-between;
}
</style>