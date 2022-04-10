<template>
    <div id="admin">
        <div class="admin-header">
            <van-field  placeholder="输入文章标题" class="admin-title" v-model="title"></van-field>
            <van-button type="primary" class="admin-btn" @click="submit">发布</van-button>
            <van-button  :to="'/for/home'" class="admin-btn">首页</van-button>
        </div>
        <Edit @onEdit="onEdit"/>
    </div>
    <template  v-if="popshow">
        <AdminPopup @onSubmit="onSubmit" @onCancel="onCancel"/>
    </template>
  
</template>

<script lang="ts">
import { defineComponent,watch,ref,onUpdated } from 'vue';
import Edit from '@/components/wangeditor/index.vue';
import {AdminPopup} from '@/components/widget'
import router from '@/app/router';
import {apiUploadImgUrl,apiGetImgUrl} from '@/apis/imgUrl';
import {blobToBase64,cdnImgUrl} from '@/utils/img';
import {apiArticleCreate} from '@/apis/article'
  export default defineComponent({
    name: 'Admin',
    components:{Edit,AdminPopup},
    setup(props,ctx:any) {
        const title =ref('');
        const popshow =ref(false)
        const editContent:any =ref('');
        const onEdit=(content:any)=>{
            editContent.value =content;
        }
        const go2Home=()=>{
            router.push({path:''})
        }
        const submit =()=>{
            popshow.value=!popshow.value;
        }
        const  onSubmit= async (params:any)=>{
            const {classify,file} =params;
            const [File] =file;
            const urlBase64 :any=await blobToBase64(File.file);
            const ret:any = await apiUploadImgUrl({
                name:File.file.name,
                message:`${File.file.name} upload`,
                content:urlBase64.substring(urlBase64.indexOf(',')+1)
            });            
            if(ret.error) return;
            const {content} =ret.data;
         
            const result:any= await apiArticleCreate({
                title:title.value,
                content:editContent.value,
                cover_url:cdnImgUrl(content.download_url),
                cover_name:File.file.name,
                categoty_id:classify.value,
                categoty_name:classify.label
            })
            console.log(result,'---result');
           
        }
        const onCancel=()=>{
            console.log(123)
            popshow.value=false
        }
        return {
           go2Home,
           title,
           submit,
           popshow,
           onSubmit,
           onCancel,
           editContent,
           onEdit
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
