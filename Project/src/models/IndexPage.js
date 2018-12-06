export default{
    namespace:'IndexPage',
    
    state:{
        getPersonalizedList:[],
        getBannerList:[]
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
        }
    },

    reducers:{
        getBanner(state,{payload}){
            return {...state,getBannerList:payload}
        },
        Personalized(state,{payload}){
            return {...state,getPersonalizedList:payload}
        }
    }
}