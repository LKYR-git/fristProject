import request from '../utils/request';
export * from './discover.js'

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';

//登录接口
export function logins(params){
    return request(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
}

export function getUrl(params){
    return request(`${host}/song/url?id=${params}`)
}