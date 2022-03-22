<template>
  <div class="app default">
    <Background/>
    <PCApp/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {PCApp} from '../components/equipment';
import {Background} from '../components/widget'
export default defineComponent({
  name: 'App',
  components:{PCApp,Background},
  
})
</script>

<style lang="scss">
@import 'src/styles/init.scss';
.app{
  display: flex;
  flex-direction: column;
 &.default {
      // @include defaultTheme();
      @include darkTheme()
  }
}



</style>
