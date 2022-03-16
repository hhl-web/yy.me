<template>
    <div class="layout">
        <NavBar/>
        <div class="layout-main">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template> 
 
 <script lang="ts">
import {defineComponent} from 'vue'
import {NavBar,Footer} from './index.js';

export default defineComponent({
    name: 'Layout',
    components:{NavBar,Footer},
    props: {},
    setup() {}
});
</script> 
 
<style scoped lang="scss">
</style> 