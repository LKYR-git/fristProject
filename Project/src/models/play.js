import {getUrl} from '../services/index'

export default{
    namespace:"geturl",
    state:{
        id: 0,
        url: '',
        info: {}
    },
    effects:{
        *getUrl({payload},{call,put}){
            let response = yield call(getUrl,payload)
            console.log('res',response);
            let obj = {info:response.data.data[0]};
            console.log(obj);
            obj.id = payload;
            obj.url = response.data.data[0].url;
            
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