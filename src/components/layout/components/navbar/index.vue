<template>
    <div class="layout-navbar">
      <div class="layout-navbar-l">
          <nav></nav>
          <span>快乐起航</span>
      </div>
      <div class="layout-navbar-r">
          <span>您好,陌生人</span>
          <!-- 语言切换 -->
      </div>
    </div>
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
.layout-navbar{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5.1rem;
    line-height: 5.1rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff
}
</style> 