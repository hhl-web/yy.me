import httpServices from '@/http/create';
import APPCONFIG from '@/app/config'
const service =httpServices.IMGURL_SERVICE;
/**
 * 
 * @param params 
 * 更新或者上传图片
 */
export const apiUploadImgUrl = (params:any)=>{
    return service.put(`/repos/${APPCONFIG.getHubOwner}/${APPCONFIG.getHubRepo}/contents/${params.name}`,{
        message:params.message,
        content:params.content,
        sha:params.sha
    })
}
/**
 * 
 * @param params 
 * 查询图片信息
 */
export const apiGetImgUrl =(name:any)=>{
    return service.get(`/repos/${APPCONFIG.getHubOwner}/${APPCONFIG.getHubRepo}/contents/${name}`)
}