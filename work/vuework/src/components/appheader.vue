<template>
    <header>
        <div id="a" >
            <div>
           <span class="el-icon-s-home" style="color:#409EFF;font-size:30px;" ></span>        <!--主页icon -->
            <span>杨涛便利店</span>
            </div>
            <el-button @click="drawer = true" type="primary" style="font-size:30px;" icon="el-icon-shopping-cart-2"></el-button>                <!--购物车图标 -->      
            <el-drawer title="购物车" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
  <shopcar></shopcar>
</el-drawer>
            <div>
            <el-form ref="form" :model="form" label-width="80px" :inline="true" size="mini">               <!--登录注册表单 -->
            <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
             <el-button type="primary" @click="onSubmit">登录</el-button>
               <el-button type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
            </el-form>
            </div>        
        </div>
        <div>
          <el-carousel height="150px" indicator-position="outside" trigger="click">
         <el-carousel-item v-for="(item,index) in img1" :key="item.index">
           <img :src="img1[index]">
            </el-carousel-item>
         </el-carousel>
         </div>  
    </header>
</template>

<script>
import shopcar from "./shopcar.vue";
export default {
      data() {
      return {
        drawer: false,
          img1:[require("../imgs/header/header1.jpg"),require("../imgs/header/header2.jpg"),require("../imgs/header/header3.jpg")],
        form: {
          name: "",
         password:""
        }
      }
    },
    methods: {
      onSubmit() {
        console.log("submit!");
      }
    },
    created:function(){
       this.$alert('简历练习作品，请勿当真!!!后续开发方向：1.完善逻辑层2.移动适配3.加载速度优化4.其它页面开发（注册/后台/商品单页）', '注意！', {
          confirmButtonText: '确定',
        });
    },
        components:{
       shopcar,
    },
}
</script>

<style scoped>

header{
    width:100%;
   margin-top:2px;
   margin-bottom:2px;
}
#a{
    display:flex;
    justify-content:space-between;
}
img{
  width:100%;
  height:150px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  shopcar{
    display:none;
  }
</style>