import httpServices from '@/http/create'
const service =httpServices.IMGURL_SERVICE;

export const apiImgUrl =(params:any)=>{
    service.put('/repos/hhl-web/saveImg/contents/'+params.name,{
        message:params.message,
        content:params.content
    })
}