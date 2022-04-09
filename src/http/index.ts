import axios  from "axios";
import APPCONFIG from '../app/config';
import {AjaxResult,AjaxResponseData,AjaxRequestConfig,AjaxRequestErrorConfig,AjaxResponse} from '@/types/http';
import {HttpMethodHandler} from './create'
export function createService(suffixURL = '', flag = false): HttpMethodHandler {
    let newURL = `${suffixURL}`
    if (flag) {
        newURL = suffixURL;
    }
    const service = axios.create({
        baseURL: newURL,
        // withCredentials: true,
        timeout: 60000
    });
    service.interceptors.request.use((config:any)=>{
        if(!config.url.includes('/api')){
            config.headers.Authorization =`token ${APPCONFIG.gitHubToken}`;
            config.headers.accept=`${APPCONFIG.gitHubAccept}`
        }
      
        return config;
    });
    // service.interceptors.response.use((config)=>{

    // });
    return {
        get<T = any>(url: string, data?: any, options?: AjaxRequestConfig): Promise<AjaxResult<T>> {
            return service.get(url, { params: data, ...options });
        },
        post<T = any>(url: string, data?: any, options?: AjaxRequestConfig): Promise<AjaxResult<T>> {
            return service.post(url, data, options);
        },
        delete<T = any>(url: string, data?: any, options?: AjaxRequestConfig): Promise<AjaxResult<T>> {
            return service.delete(url, {
                params: data,
                ...options
            });
        },
        put<T = any>(url: string, data?: any, options?: AjaxRequestConfig): Promise<AjaxResult<T>> {
            return service.put(url, data, options);
        }
    };
}

