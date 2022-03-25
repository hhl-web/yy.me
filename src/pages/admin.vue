<template>
    <div id="admin">
        <div class="admin-header">
            <van-field  placeholder="输入文章标题" class="admin-title" v-model="title"></van-field>
            <van-button type="primary" class="admin-btn" @click="submit">发布</van-button>
            <van-button  :to="'/for/home'" class="admin-btn">首页</van-button>
        </div>
        <Edit ref="editRef"/>
    </div>
    <AdminPopup v-if="popshow"/>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onUpdated } from 'vue';
import Edit from '@/components/wangeditor/index.vue';
import {AdminPopup} from '@/components/widget'
import router from '@/app/router';
  export default defineComponent({
    name: 'Admin',
    components:{Edit,AdminPopup},
    setup(props,ctx:any) {
        const editRef =ref();
        const title =ref('');
        const popshow =ref(false)
        const params:any =ref({});
        const go2Home=()=>{
            router.push({path:''})
        }
        const submit =()=>{
            console.log(editRef.value.content,title.value);
            popshow.value=!popshow.value;
        }
        const afterRead =(file:File)=>{
            console.log(file)
        }
        return {
           go2Home,
           title,
           editRef,
           submit,
           popshow

        }
    }
  })
</script>

<style lang="scss" scoped>
#admin{
    // width: 1020px;
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
.admin-title{
    margin-right: 10px;
}
.admin-btn{
    width: 120px;
    margin: 2px;
}
.admin-upload{
    height: 100px;
    width: 100px;
    background: #fff;
}
</style>
