<template>
    <NavBar/>
    <div class="pc-main">
        <div class="pc-menu">
            <div class="nav-list">
                 <nav :key="index" v-for="(item,index) in menuOpts" class="menu-nav">
              <a> {{item.label}}</a>
            </nav>
            </div>
        </div>
          <!-- -->
        <div class="pc-container"> 
            bubudedede
            <router-view></router-view>
        </div>
        <div class="pc-aside">
            lallal
        </div>
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';
import {NavBar,Footer} from '../../layout';
export default defineComponent({
  name: 'App',
  components:{NavBar,Footer},
  setup(){
      const menuOpts =ref([{
          label:'春天是希望的季节',
          value:1
      },
      {
          label:'夏天是燥热的世界',
          value:1
      },
      {
          label:'秋天是收获的果实',
          value:1
      },
      {
          label:'冬天蠢蠢欲动的心',
          value:1
      }])
    return {
      menuOpts
    }
  }
 
  
})
</script>

<style lang="scss">
@use 'sass:math';
@import 'src/styles/init.scss';
.pc-main{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1050px;
    margin: 0 auto;
    height: 2000px;
    padding-top: 4.1rem;
}
.pc-menu{
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
}
.nav-list{
    width: 160px;
    padding: 0;
    margin: 0;
    position: fixed;
}
.pc-aside{
    order: 3;
    flex-shrink: 0;
    margin-left: 1.236rem;
}
.pc-container{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
</style>
