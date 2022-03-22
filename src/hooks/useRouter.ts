import { useRoute} from 'vue-router';
import { watch,ref,Ref } from 'vue';

export interface MetaProps{
    title:string,
    path:string
}
export  function useRouter(){
    const route = useRoute();
    const meta :Ref<MetaProps>=ref({
        title:'',
        path:''
    })
    watch( 
        ()=> [route.fullPath,route.meta],
        ([newPath,newMeta]:any) => {
            meta.value.title = newMeta.title;
            meta.value.path= newPath;
            console.log('监听路由',newPath,newMeta);
        },{
            immediate:true
    })
    return {
        meta,
        route,
    }
}