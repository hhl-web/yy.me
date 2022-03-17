<template>
    <div class="layout-footer">
        <div class="footer-container"> 世界之大 @闽C | 小琳同学博客 | VUE.VITE.KOA | 周知 </div>
    </div>
</template> 
 
 <script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Footer',
    props: {},
    setup() {}
});
</script> 
 
<style scoped lang="scss">
.layout-footer{
    margin: 0 auto;
    width: 1050px;
    color: red;
}
.footer-container{
    text-align: center;

}
</style> 