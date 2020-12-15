<template>
    <ul>
        <li class="shop1">
    <h3>{{index+1}}</h3>   
    <h6>{{hotitem.name}}</h6>
    <h6>单价:{{hotitem.price}}元/{{hotitem.unit}}</h6>
        </li>
         <li class="shop">
    <img :src="imgsrc" alt="商品图片">
   <el-input-number v-model="num" @change="handleChange" :min="0" :max="hotitem.num" class="hotbutton"></el-input-number>
         </li>  
    </ul>
</template>

<script>
export default {
          data:function(){
        return{
            imgsrc:require("../imgs/"+this.hotitem.uid+"/"+this.hotitem.id+".jpg"),
            num:0
        }
    },
    props:["hotitem","index"],
     methods:{
      handleChange:function(){

      }
     },
}
</script>

<style scoped>
.shop{
    display: none;
    height:200px;
}

ul:hover .shop{
    display: block;
}
.shop1{
    display: flex;
    justify-content: space-between;
width:100%;
height:100px;
}
.shop1 h3{
    height:100px;
    line-height:5.3;
    text-align:center;
    width:clamp(100px,100px,25%);
    background-color: #87CEFA;
    clip-path: circle(20px at 50% 50%);
}

.shop1>h6{
    width:clamp(150px,200px,35%);
    line-height:8;
       text-align:center;
}
 img{
    margin-left: 10px;
    margin-right: 10px;
    width:clamp(100px,100px,35%);
    height: 100px;
}
.hotbutton{
    width:60%;
 
}
</style>