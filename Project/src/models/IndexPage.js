export default{
    namespace:'IndexPage',
    
    state:{
        getPersonalizedList:[],
        getBannerList:[],
        getmusiclist:[]
    },

    effects:{
        * getbanner(action,{call,put}){
            let res = yield call(()=>{
                return fetch('http://123.206.55.50:14000/banner')
                .then(res=>res.json())
                .then(body=>body)
            })
            yield put({
                type:'getBanner',
                payload:res.banners
            })
        },
        // http://123.206.55.50:14000/personalized
        * getPersonalized(action,{call,put}){
            let res = yield call(()=>{
                return fetch('http://123.206.55.50:14000/personalized')
                .then(res=>res.json())
                .then(body=>body)
            })
            //console.log('res...',res);
            yield put({
                type:'Personalized',
                payload:res.result
            })
        },
        *getMusicList(action,{call,put}){
            let res = yield call(()=>{
                return fetch(`http://123.206.55.50:14000/top/playlist`)
                .then(res=>res.json())
                .then(body=>body)
            })
            console.log('music',res);
            yield put({
                type:'musiclist',
                payload:res.playlists
            })
        }
    },

    reducers:{
        getBanner(state,{payload}){
            return {...state,getBannerList:payload}
        },
        Personalized(state,{payload}){
            return {...state,getPersonalizedList:payload}
        },
        musiclist(state,{payload}){
            return {...state,getmusiclist:payload}
        }
    }
}