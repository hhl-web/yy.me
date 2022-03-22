<template>
    <div id="admin">
        <div class="admin-header">
            <el-input placeholder="输入文章标题"></el-input>
            <el-button type="primary">发布文章</el-button>
            <el-button type="primary" @click="go2Home">返回首页</el-button>
        </div>
         <Edit/>
    </div>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onUpdated } from 'vue';
import Edit from '@/components/wangeditor/index.vue'
import About from './about.vue';
import router from '@/app/router';
  export default defineComponent({
    name: 'Admin',
    components:{Edit, About},
    setup(props,ctx:any) {
        const go2Home=()=>{
            router.push({path:'/for/home'})
        }
        return {
           go2Home
        }
    }
  })
</script>

<style lang="scss" scoped>
#admin{
    height: 100%;
    width: 1020px;
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

}
.admin-header{
    display: flex;
    width: 100%;
    margin: 10px 0;
}
.admin-edit{
    height: auto;
    width: 100%;
    display: flex;

}
</style>
