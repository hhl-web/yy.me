<template>
    <header class="layout-header">
        <div class="layout-text" @click="onClick">
           MORE
        </div>
         <div class="layout-fa" @click="onClick">
            <i class="fa"></i>
            <i class="fa"></i>
            <i class="fa"></i>
        </div>
    </header>
   
</template> 
 
 <script lang="ts">
import {defineComponent,ref} from 'vue'
import router from '@/app/router';

export default defineComponent({
    name: 'NavBar',
    props: {},
    setup(props,ctx:any) {
        const onClick=()=>{
            console.log('onClick',router);
            router.push({path:'/admin/edit'})
        }
        return {
            onClick
        }
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
    color: $color-black;
    font-weight: 700;
    cursor: pointer;

}
.layout-text{
    float: left;
    margin: 23px 10px;

}
.layout-fa {
    display: flex;
    flex-direction: column;
    width: 35px;
    height: 35px;
    margin: 20px 10px;
    &:hover {
       .fa{
            display: inline-block;
            border-bottom: 4px solid rgb(91, 172, 74);
            border-radius: 4px;
        }
    }
}
.fa{
    display: inline-block;
    border-bottom: 2px solid rgb(91, 172, 74);
    border-radius: 5px;
    margin: 3px;
    font-size: 2em;
}

</style> 