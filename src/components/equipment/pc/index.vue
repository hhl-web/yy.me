<template>
    <NavBar/>
    <Swiper/>
    <div class="pc-main">
        <Menu/>
        <div class="pc-container"> 
            <router-view></router-view>
            <div class="pc-aside">
                <!-- <Aside/> -->
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';
import {NavBar,Footer,Aside} from '../../layout';
import Menu from '../../menu/index.vue';
import Swiper from '../../swiper/index.vue';
import Admin from '../../../pages/admin.vue'
export default defineComponent({
  name: 'App',
  components:{NavBar,Footer,Menu,Swiper,Aside,Admin},
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
    flex-direction: column;
    justify-content: space-between;
    width: 1020px;
    margin: 0 auto;
    top: 20px;

}
.pc-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 600px;
    margin-top: 10px;
}
</style>
