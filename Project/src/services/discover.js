import request from '../utils/request';

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';

//搜索歌曲
export function search(keywords){
    return request(`${host}/search?keywords=${keywords}`)
}
