import {createService} from './index';
import {AjaxResult,AjaxResponseData,AjaxRequestConfig,AjaxRequestErrorConfig,AjaxResponse} from '@/types/http';
enum BackendPrefixURLEnum {
    BASE_SERVICE ='http://localhost:3009',
    IMGURL_SERVICE='https://api.github.com'
}
type BackendURLKeys = keyof typeof BackendPrefixURLEnum;
type RequestHandler = <T = any>(url: string, payload?: any, reqOption?: AjaxRequestConfig) => Promise<AjaxResult<T>>;
type HttpMethods = 'get' | 'post' | 'put' | 'delete';
export type HttpMethodHandler = Record<HttpMethods, RequestHandler>;
export type HttpServices = Record<BackendURLKeys, HttpMethodHandler>;
const backendURLMap = new Map<BackendURLKeys, string>();
const httpServices: HttpServices = {} as HttpServices;
function initServices() {
    for (const entry of Object.entries(BackendPrefixURLEnum)) {
        const [key, url] = entry as [BackendURLKeys, BackendPrefixURLEnum];
        httpServices[key] = createService(url);
        backendURLMap.set(key, url);
    }
}
initServices();

export default httpServices;