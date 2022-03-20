<template>
    <NavBar/>
    <div class="pc-main">
        <Menu/>
        <div class="pc-container"> 
            <Swiper/>
            <router-view></router-view>
        </div>
        <!-- <div class="pc-aside">
            lallal
        </div> -->
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';
import {NavBar,Footer} from '../../layout';
import Menu from '../../menu/index.vue';
import Swiper from '../../swiper/index.vue'
export default defineComponent({
  name: 'App',
  components:{NavBar,Footer,Menu,Swiper},
  setup(){
   
    return {
      
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
    width: 1020px;
    margin: 0 auto;
    height: 2000px;
    padding-top: 4.1rem;
    top: 20px;
}
.pc-aside{
    order: 3;
    flex-shrink: 0;
    margin-left: 1.236rem;
}
.pc-container{
    position: relative;
    width: calc(100% - 160px);
    left: 160px;
}
</style>
