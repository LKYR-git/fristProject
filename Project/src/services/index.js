import request from '../utils/request';
export * from './discover.js'

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';

//登录接口
export function logins(params){
    return request(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
}
//获取歌曲
export function getUrl(params){
    return request(`${host}/song/url?id=${params}`)
}
//热搜歌曲
export function hot(){
    return request(`${host}/search/hot`)
}

//获取歌曲详情
export function getUrlDetail(params){
    return request(`${host}/song/detail?ids=${params}`)
}

// 获取歌词
export function getLyric(id){
    return request(`${host}/lyric?id=${id}`)
}