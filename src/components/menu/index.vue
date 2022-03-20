<template>
    <div class="menu">
        <div class="menu-logo"></div>
        <div class="menu-link">
          <span class="blog">夜长梦多</span>
          <div class="link">
             <template :key="index" v-for="(item,index) in menuOpts" >
              <router-link :to="item.path" class="menu-nav">{{getLabel(item,index)}}</router-link>
            </template>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';

export default defineComponent({
  name: 'App',
  setup(){
    const menuOpts =ref([
      {
          label:'何以为家',
          value:1,
          path:'/for/home'
      },
      {
          label:'上路是偶然',
          value:2,
          path:'/for/chance'
      },
      {
          label:'关于我',
           value:3,
          path:'/for/me'
      },
      {
          label:'思考生活',
            value:4,
          path:'/for/live'
      },
    ])
    const getLabel=(item:any,index:number)=>{
      return index == menuOpts.value.length-1 ?item.label :`${item.label} |`
    }
    // 吸顶函数
    const suckTop =()=>{

    }
    return {
      menuOpts,
      getLabel
    }
  }
})
</script>

<style lang="scss">
.menu{
    padding: 0;
    margin: 0;
    height: auto;
    width: 1020px;
    display: flex;

}
.menu-logo{
    background-image: url('@/assets/imgs/logo.png');
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 50px 50px;
    border-radius: 5px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
.menu-link{
  display: flex;
  flex-direction: column;
}
.blog{
  letter-spacing: 0.01em;
  font-size: 1.5rem;
  line-height: 2rem;
  font-style: normal;
  font-weight: 700;
  color: #b9babc;
  margin-top: 0;
  margin-bottom: 0;
}
.link{
  display: flex;
}
.menu-nav{
    margin-right: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: webfont-normal,DINRegular;
    letter-spacing: .5px;
    margin-bottom: 0.618rem;
    border-radius: 4px;
    overflow: hidden;
    color: red;
      &:hover{
        color: #5BAC4A;
        border-bottom: 1px solid #5BAC4A;
        font-weight: 700;
    }
}

</style>
