<template>
    <header class="layout-header">
        <div class="layout-text">
           系统设置
        </div>
    </header>
   
</template> 
 
 <script lang="ts">
import {defineComponent,ref} from 'vue'

export default defineComponent({
    name: 'NavBar',
    props: {},
    setup() {
      
    }
});
</script> 
 
<style scoped lang="scss">
@use 'sass:math';
@import 'src/styles/init.scss';
.layout-header{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    background-color:#2d2d2d;
    color: #fff;
    font-weight: 500;
}

</style> 