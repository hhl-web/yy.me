import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AjaxResult<T = any> {
    code: number;
    data: T;
    message: string;
    error?: boolean;
    success?: boolean;
}

// 后端响应字段类型
export interface AjaxResponseData<T = any> {
    code: number;
    data?: T;
    datas?: T;
    msg?: string;
    message?: string;
    status?: string;
    success: boolean;
    timestamp: string;
}

export interface AjaxRequestConfig extends AxiosRequestConfig {
    /**不提示错误信息 */
    silent?: boolean;
    /**不使用全局参数 */
    noGlobalField?: boolean;
    // 不处理返回内容
    noResponseHandle?: boolean;
    // 显示全局loading
    showGlobalLoading?: boolean;
}

export interface AjaxRequestErrorConfig extends AxiosError {
    config: AjaxRequestConfig;
}
export interface AjaxResponse<T = any> extends AxiosResponse<T> {
    request?: AjaxRequestConfig;
}
