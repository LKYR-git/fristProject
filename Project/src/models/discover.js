import {search} from '../services/index';
export default{
    namespace:'discover',
    state:{
        songs:[],
        songCount:''
    },
    effects:{
        *search({payload},{call,put}){
            console.log('payload...',payload);
            let response = yield call(search,payload);
            console.log(response);
            yield put({
                type: 'updateState',
                payload: response.data.result
              })
        }
    },
    reducers:{
        updateState(state,action){
            console.log(state,action);
            return{...state,...action.payload}
        }
    }
}