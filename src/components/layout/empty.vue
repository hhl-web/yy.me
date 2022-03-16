<template>
    <div>
        空白布局页面
        <router-view></router-view>
    </div>
</template> 
 
 <script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'EmptyLayout',
    props: {},
    setup() {}
});
</script> 
 
<style scoped lang="scss">
</style> 