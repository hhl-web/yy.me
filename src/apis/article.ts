import httpServices from '@/http/create';

const service = httpServices.BASE_SERVICE;

/**
 * 
 * @param params 
 * 创建文章
 */
export const apiArticleCreate =(params:any)=>{
    return service.post('/api/article/create',params)
}
/**
 * 
 * @param params 
 * 根据id搜索文章
 */
export const apiArticleSearchById =(params:any)=>{
    service.get('/api/article/searchByArticleId',params)
}
/**
 * 
 * @param params 
 * 根据分类搜索文章
 */
export const apiArticleSearchByCategoty =(params:any)=>{
    service.get('/api/article/searchByCategoty',params)
}