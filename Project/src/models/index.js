//登录页的数据请求

import {routerRedux} from 'dva/router';

import {getToken,setToken} from '../utils/user';

import {logins} from '../services/index';

export default {
    namespace:'logins',
    state:{

    },
    //数据拦截
    subscriptions:{
        setup({dispatch,history}){
            return history.listen(({pathname})=>{
            console.log('pathname...',pathname);
                if(pathname !== '/login'){
                    if(pathname !== '/logins'){
                        if(!getToken()){
                            dispatch(routerRedux.replace({
                                pathname:'/login'
                            }))
                        }
                    }
                }
            })
        }
    },
    effects:{
        *login({payload},{call,put}){
            console.log('login',payload)
            let response = yield call(logins,payload);
            console.log('response',response); 
            setToken(response.data.account.id);
            yield put({
                type: 'updateState',
                payload: response.data
              });
              yield put(routerRedux.replace({
                pathname: '/',
              }))
        }
    },
    reducers: {
        updateState(state, action){
          console.log('action...', action);
          return {...state, ...action.payload}
        }
      }

}