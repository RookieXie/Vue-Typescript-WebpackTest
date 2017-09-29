
import axios from "axios";
import Vue from "vue";

export module Url{    
    axios.defaults.baseURL = 'http://wthrcdn.etouch.cn';
    axios.defaults.timeout = 5000;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // 拦截request,设置全局请求为ajax请求
    // axios.interceptors.request.use((config) => {
    //     config.headers['X-Requested-With'] = 'XMLHttpRequest'
  
    //     return config
    //  })

    //拦截response
    //axios.interceptors.response.use((value) =>{
    //     //debugger
    //     return value;
    //})
    export interface IAkCallBackEvent
    {
        (data: any,JsonError?:any ): void;
    }
    export function AkPost(url:string,data:any,callback:IAkCallBackEvent) {
        //网络请求等待状态
        //debugger
        axios.get(url,data).then(Response=>{
            //debugger
            callback(Response.data);
       }).catch(error=>{
           //debugger
           callback(error.data);
       })
    }
}