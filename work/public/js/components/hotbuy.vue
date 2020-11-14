<template>
    <div class='shop1'><h3>{{$attrs.item.snum}}</h3>
    <div><img :src='url()' alt='商品图片'></div>
    <h6>{{$attrs.item.name}}</h6><div><h6>单价</h6><h6>{{$attrs.item.price}}元/{{$attrs.item.unit}}</h6></div>
    <div><h6>数量</h6><button id='sadd1' @click='ajj'>-</button>{{num}}<button id='sminus1' @click='add'>+</button></div></div>
</template>

<script>
export default {
          data:function(){
        return{
            num:0
        }
    },
     methods:{
        url:function(){
            return "img/"+this.$attrs.item.uid+"/"+this.$attrs.item.id+".jpg";
        },
        add:function(){
            this.num++;
        },
        ajj:function(){
                this.num--;
        },
     },
}
</script>

<style scoped>

.shop1{
display: flex;
width:28vw;
height: 3vw;
margin: 0.5vw;
background-color: white;
justify-content: space-evenly;
}
.shop1 h3{
    line-height:2.5;
    margin: 0vw;
    width:2vw;
    height: 3vw;
    background-color: #87CEFA;
    clip-path: circle(1vw);
}
.shop1 img{
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    width:3vw;
    height: 3vw;
}
.shop1>h6{
    width:6vw;
    margin: 0vw;
    font-size: 0.5vw;
    line-height:5;
}
.shop1 div h6{
    margin: 0;
    width:6vw;
    line-height:2;
}
</style>