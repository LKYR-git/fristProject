import {getUrl,getUrlDetail} from '../services/index'

export default{
    namespace:"geturl",
    state:{
        id: 0,
        url: '',
        info: {},
        detail:{}
    },
    effects:{
        *getUrl({payload},{call,put}){
            let response = yield call(getUrl,payload);
            let resDetail = yield call(getUrlDetail,payload);
            console.log('res',response);
            console.log('resDetail..',resDetail);
            let obj = {info:response.data.data[0]};
            obj.id = payload;
            obj.url = response.data.data[0].url;
            obj.detail = resDetail.data.songs[0];
            yield put({
              type: 'updateState',
              payload: obj
            })
        }
    },
    reducers:{
        updateState(state,action){
            console.log('action',action)
            return{...state,...action.payload}
        }
    }
}