<template>
    <NavBar/>
    <Swiper  v-if="!isShowAdmin"/>
    <div class="pc-main">
        <Menu  v-if="!isShowAdmin"/>
        <div class="pc-container"> 
            <router-view></router-view>
            <div class="pc-aside" v-if="!isShowAdmin">
                <!-- <Aside/> -->
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent,computed} from 'vue';
import {NavBar,Footer,Aside} from '../../layout';
import Menu from '../../menu/index.vue';
import Swiper from '../../swiper/index.vue';
import Admin from '../../../pages/admin.vue';
import {useRouter,MetaProps} from '@/hooks/useRouter';
export default defineComponent({
  name: 'App',
  components:{NavBar,Footer,Menu,Swiper,Aside,Admin},
  setup(){
      const {meta} = useRouter();
      const isShowAdmin =computed(()=>{
          return meta.value.title ==='后台编辑'
      })
    return {
      isShowAdmin,
      meta
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
    padding: 15px;

}
.pc-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 600px;
    margin-top: 10px;
}
</style>
