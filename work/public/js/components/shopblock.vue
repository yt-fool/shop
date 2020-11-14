<script>

export default {
    name:"shopblock",
    data:function(){
        return{
           src:"null",
           num:0
        }
    },
    props:['uid'],
    methods:{
        url:function(){
            return"../img/"+this.uid+"/"+this.$attrs.item.id+".jpg";
        },
        add:function(){          
            this.num++;
        },
        ajj:function(){
                this.num--;
        }
    },   
}
</script>

<template>
    <div class='shopp' >
    <img :src='url()' alt='商品图片'>
    <h4>{{$attrs.item.name}}</h4>
    <h4>'单价:'<span>{{$attrs.item.price}}/{{$attrs.item.unit}}</span></h4>
    <button v-if='num!=0' @click='ajj'>-</button>{{num}}
    <button v-if='num!=$attrs.item.num'  @click='add'>+</button>
    <h6 v-if='num==$attrs.item.num'>库存不足</h6></div>
</template>

<style>
.shopp{                          /*设置商品样式*/
width:300px;
height:900px;
border:0.2em solid #87CEFA;
}
.shopp img{                             /*设置商品中插图*/
    border-bottom:0.2em solid;                              
width: 100px;
height:100px;
}
.shopp h6{
    color: red;
}
</style>