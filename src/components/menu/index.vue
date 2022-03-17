<template>
    <div class="menu">
        <template :key="index" v-for="(item,index) in menuOpts" >
            <router-link :to="item.path" class="menu-nav">{{item.label}}</router-link>
        </template>
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
    
    return {
      menuOpts
    }
  }
})
</script>

<style lang="scss">
.menu{
    padding: 0;
    margin: 0;
    position: fixed;
    height: auto;
}
.menu-nav{
    display: block;
    position: relative;
    width: 100%;
    height: 3em;
    line-height: 3em;
    padding: 0 1.236rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-family: webfont-normal,DINRegular;
    letter-spacing: .5px;
    margin-bottom: 0.618rem;
    border-radius: 4px;
    overflow: hidden;
    color: red;
    &:hover{
        color: blue;
        background: #fff;
    }
}

</style>
