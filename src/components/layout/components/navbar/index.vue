<template>
    <header class="layout-header">
        <div class="layout-text">
            <div class="layout-navbar-l">
                <nav></nav>
                <span>快乐起航</span>
            </div>
            <div class="layout-navbar-r">
                <span>您好,陌生人</span>
                <!-- 语言切换 -->
            </div>
        </div>
        <div class="layout-nav"></div>
    </header>
   
</template> 
 
 <script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'NavBar',
    props: {},
    setup() {}
});
</script> 
 
<style scoped lang="scss">
@use 'sass:math';
@import 'src/styles/init.scss';
.layout-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.1rem;
    line-height: 4.1rem;
    z-index: 999;
    background-color: $body-bg;
    border-bottom: 1px solid  $body-bg;
}
.layout-text{
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 1050px;
    margin: auto;
}
.layout-nav{
    margin-bottom:2rem ;
}
</style> 