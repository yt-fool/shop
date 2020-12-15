
<template>
    <div class="shopblock" >
    <img :src="imgsrc" alt="商品图片">
    <h4>{{shopitem.name}}</h4>
    <h4>单价:<span>{{shopitem.price}}/{{shopitem.unit}}</span></h4>
   <el-input-number v-model="num" @change="handleChange" :min="0" :max="shopitem.num" class="shopbutton"></el-input-number>
   </div>
</template>

<script>
export default {
    data:function(){
        return{
           imgsrc:require("../imgs/"+this.packid+"/"+this.shopitem.id+".jpg"),
           num:0,                                    //商品数量
        }
    },
    props:["shopitem","packid"],
    methods:{
        handleChange:function() {
             console.log(this.num);
      }
    },   
}
</script>


<style>
.shopblock{                          /*设置商品样式*/
width:clamp(100px,calc(130px-10px-1em),20%);
margin: 10px;
 display: flex;
   flex-direction: column;
   align-items: center;
}
.shopblock img{                             /*设置商品中插图*/
border-bottom:0.3em dotted #87CEFA;                              
width:100%;
}
.shopblock h6{
    color: red;
}
.shopblock h4{
   height:40px;
    text-align:center;
}
.shopbutton{
    width:100%
}
.shopblock:hover{
    border-right:0.2em solid #4ed5e7;
    border-left:0.2em solid #4ed5e7;
}
</style>