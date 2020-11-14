<template>
    <div class='shop2'><div>
        <img :src='url()' alt='商品图片'></div>
        <h6>{{$attrs.item.name}}</h6>
        <div><h6>单价</h6><h6>{{$attrs.item.price}}元/{{$attrs.item.unit}}</h6></div>
        <div><h6>数量</h6><h6>{{number}}</h6></div>
        <div><h6>总价</h6><h6>{{number*$attrs.item.price}}元</h6></div>
        <button @click='del'>删除</button></div>
</template>

<script>
export default {
     data:function(){
        return{
            number:1,
        }
    },
    methods:{
        url:function(){
            return "img/"+this.$attrs.item.uid+"/"+this.$attrs.item.id+".jpg";
        },
    },
}
</script>

<style scoped>

.shop2{
    display: flex;
    width:28vw;
    height: 3vw;
    margin: 0.5vw;
    justify-content: space-between;
    border-style: solid;
    border-color: #87CEFA;
    }
    .shop2 img{
        margin-left: 0.5vw;
        margin-right: 0.5vw;
        width:3vw;
        height: 3vw;
    }
    .shop2>h6{
        width:6vw;
        margin: 0vw;
        font-size: 0.5vw;
        line-height:5;
    }
    .shop2 div h6{
        margin: 0;
        width:3vw;
        line-height:2;
    }
</style>