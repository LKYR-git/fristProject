import {getUrl,getUrlDetail,getLyric} from '../services/index'

export default{
    namespace:"geturl",
    state:{
        id: 0,
        url: '',
        info: {},
        detail:{},//歌词详情
        lyric:'',//歌词的分解
        current: 0, // 当前播放歌曲下标
        playList: JSON.parse(window.localStorage.getItem('playList'))||[]  // 播放列表
    },
    effects:{
        *getUrl({payload},{call,put}){
            let response = yield call(getUrl,payload);

            let resDetail = yield call(getUrlDetail,payload);
            //console.log('resDetail..',resDetail);
            let obj = {info:response.data.data[0]};
            obj.id = payload;
            obj.url = response.data.data[0].url;
            obj.detail = resDetail.data.songs[0];
            yield put({
              type: 'updateState',
              payload: obj
            })
        },
        *getlyric({payload},{call,put}){
            let response = yield call(getLyric,payload);
            yield put({
                type:'updateState',
                payload:{
                    lyric:response.data.lrc.lyric
                }
                
            })
        },
         // 获取一组歌曲的播放文件和详情
        *getUrls({payload}, {call, put}){
        console.log('getUrls payload', payload);
         // 获取歌曲可播放文件
        let responses = yield call(getUrl, payload.join(','));
        // 获取歌曲详情
        let details = yield call(getUrlDetail, payload.join(','));
        console.log('urls response...', responses);
        console.log('urls detail...', details);
        responses = responses.data.data;
        details = details.data.songs;
        let playList = [];
        details.forEach(item=>{
          playList.push({
            detail: item,
            info: responses.filter(value=>value.id==item.id)[0]
          })
        })
        window.localStorage.setItem('playList', JSON.stringify(playList));
        console.log('details...',details);
        yield put({
          type: 'updateState',
          payload: {playList}
        })
      }
    },
    reducers:{
        updateState(state,action){
            console.log('action',action)
            return{...state,...action.payload}
        },
        // 切换歌曲
    changePlay(state, {payload}){
        let newState = {...state};
        // 如果没有播放列表，不再继续处理
        if (!state.playList.length || state.mode == 1){
          return newState;
        }
        // 随机播放
        if (state.mode == 2){
          let index = Math.floor(Math.random()*(state.playList.length-1));
          console.log('index...', index);
          newState.current = index;
        }else{
           // 顺序播放
          if (payload == 'prev'){
            if (state.current == 0){
              newState.current = state.playList.length-1;
            }else{
              newState.current--;
            }
          }else{
            if (state.current == state.playList.length-1){
              newState.current = 0;
            }else{
              newState.current++;
            }
          }
        }
  
        newState.id = state.playList[newState.current].info.id;
        newState.url = state.playList[newState.current].info.url;
        newState.info = state.playList[newState.current].info;
        newState.detail = state.playList[newState.current].detail;
  
        return newState;
      }
    }
}