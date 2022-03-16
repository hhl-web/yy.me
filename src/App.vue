<template>
  <div class="app default">
     <NavBar/>
        <div class="app-main">
            <router-view></router-view>
        </div>
        <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NavBar,Footer} from './components/layout';
export default defineComponent({
  name: 'App',
  components:{NavBar,Footer},
  
})
</script>

<style lang="scss">
@import 'src/styles/theme.scss';
@import 'src/styles/init.scss';
.app{
  display: flex;
  flex-direction: column;
 &.default {
      @include defaultTheme();
  }
  .app-main{
    height: 900px;
    background-color: var(--body-bg);
  }
}



</style>
