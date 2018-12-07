import {search,hot} from '../services/index';
export default{
    namespace:'discover',
    state:{
        songs:[],
        songCount:'',
        hotList:[]
    },
    effects:{
        *search({payload},{call,put}){
            let response = yield call(search,payload);
            yield put({
                type: 'updateState',
                payload: response.data.result
              })
        },
        *hot(action,{call,put}){
          let response = yield call(hot);
            yield put({
                type:'hotlist',
                payload:response.data.result.hots
            })
        }
    },
    reducers:{
        updateState(state,action){
            return{...state,...action.payload}
        },
        hotlist(state,{payload}){
            return{...state,hotList:payload}
        }
    }
}