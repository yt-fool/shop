

<template>
    <section><h3>{{ $attrs.item.name }}</h3>
    <div class='pack'>
        <shopblock :uid='$attrs.item.id' :item='item' v-for='item in this.shoppdata' :key='item.index'>
            </shopblock></div><button v-if='num!=1'  @click='onclick1'>-</button>{{num+'/'+num1}}
            <button v-if='num!=num1'  @click='onclick2'>+</button></section>
</template>

<script>
import shopblock from './shopblock.vue';
export default {
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
    created:function(){
        this.num1=this.$attrs.item.knum%5==0?this.$attrs.item.knum/5:parseInt(this.$attrs.item.knum/5+1);
        fetch("/data?a=2&&b="+this.$attrs.item.id+"&&c=1").then(response=>{                                            
            if(response.status>=200 && response.status<=300 || response.status==304){
            response.text().then((data)=>{  
                this.shoppdata=JSON.parse(data);
            })
        }
    })
    },
    components:{
       shopblock,
    }
}
</script>

<style scoped>
.pack{
    display: flex;
    justify-content: space-between;
}
</style>