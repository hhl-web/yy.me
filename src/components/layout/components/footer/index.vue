<template>
    <div class="layout-footer">
       世界之大 @闽C | 小琳同学博客 | VUE.VITE.KOA | 周知
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
    width: 1020px;
    color: red;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #666;
    font-size: 11px;
    margin: 0 auto 1rem auto;
    vertical-align: top;
    text-align: center;
}

</style> 