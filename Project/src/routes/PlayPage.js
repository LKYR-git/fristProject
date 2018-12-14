import React, { Component } from 'react';
import {connect} from 'dva';
import styles from './PlayPage.scss';
import {formatTime} from '../utils/index';
import { Carousel } from 'antd-mobile';
//歌词页
import Lyric from '../components/lyric';
//声波页
import AudioProcess from '../components/AudioProcess';

@connect(({geturl})=>{
    console.log(geturl)
    return geturl
},dispatch=>{
    return{
        getUrl:id=>{
            dispatch({
                type:'geturl/getUrl',
                payload:id
            })
        },
        getlyric:id=>{
            dispatch({
                type:'geturl/getlyric',
                payload:id
            })
        },
        changePlay:payload=>{
            dispatch({
                type:'geturl/changePlay',
                payload
            })
        }
    }
})
export default class Play extends Component {
    constructor(props) {
        super(props)
        this.state={
            progress:0,
            isPlay:true
        }
    }
    com
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getUrl(id);
    }

    componentWillReceiveProps(nextProps){
        // 只要判断下一次的id和上一次的id不一样就要重新获取歌词
        //console.log(nextProps.id);
        if (nextProps.id != this.props.id){
          this.props.getlyric(nextProps.id);
        }
      }

    // 播放进度更新触发的钩子
    timeUpdate(){
        let progress = this.refs.audio.currentTime/this.refs.audio.duration*100;
        this.setState({
            progress
        })
    }
    // 获取总时长
    get duration(){
        if (this.refs.audio && this.refs.audio.duration){
            return formatTime(this.refs.audio.duration);
        }
        return '00:00';
    }

   // 获取当前播放时间
    get currentTime(){
        if (this.refs.audio && this.refs.audio.currentTime){
            return formatTime(this.refs.audio.currentTime);
        }
        return '00:00';
    }
    //暂停pause--播放play
    chageState(){
        console.log(window._hmt);
        this.setState({
            isPlay:!this.state.isPlay
        },()=>{
            this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
        });
        
    }
    //触摸进度条触发
    touchStart(){
        this.setState({
            isPlay:false
        },()=>{
            this.refs.audio.pause();
        })
    }
    //移动进度条
    touchMove(e){
        let touch = e.touches[0],
        progressEle = this.refs.progress;
        let progress = (touch.pageX - progressEle.offsetLeft)/progressEle.offsetWidth;
        if (progress>1){
          progress = 1;
        }
        if (progress<0){
          progress = 0;
        }
        this.setState({
          progress: progress*100
        }, ()=>{
          this.refs.audio.currentTime = progress*this.refs.audio.duration;
        })
    }
    //离开进度条
    touchEnd(){
        this.setState({
            isPlay:true
        },()=>{
            this.refs.audio.play();
        })
    }
    //切换上下首
    chanagePlay(type){
        this.props.changePlay(type);
    }
    render() {  
        //去判断有没有值
        if(!this.props.detail.al){
            return null;
        }
        if(!this.props.detail.ar){
            return null;
        }
        let { isPlay } = this.state;
        return (
            <div className={styles.play}>
                <div className={styles.playHeader}>
                    <span><img src="./palyIcon/xiangzuojiantou.png"/></span>
                    <div><span>{this.props.detail.name}--{this.props.detail.ar[0].name}</span></div>
                    <span></span>
                </div>
                <Carousel className={styles.imgUrl}>
                    <div className={styles.url}>
                        <div className={styles.urls}>
                            <img  src={this.props.detail.al.picUrl}/>
                        </div>
                    </div>
                    <Lyric lyric={this.props.lyric} currentTime={this.refs.audio && this.refs.audio.currentTime}></Lyric>
                    {/* <AudioProcess audio={this.refs.audio}/> */}
                </Carousel>
                <div className={styles.audio}>
                    <div className={styles.playTop}></div>
                    <div className={styles.playcontent}>
                        <span>{this.currentTime}</span>
                        <div className={styles.progress}    
                             onTouchStart={this.touchStart.bind(this)}
                             onTouchMove={this.touchMove.bind(this)}
                             onTouchEnd={this.touchEnd.bind(this)}>
                            <b ref="progress">
                                <span style={{width:this.state.progress+'%'}}></span>
                            </b>
                        </div>
                        <span>{this.duration}</span>
                    </div>
                    {this.props.url?<audio ref="audio" crossOrigin="anonymous" autoPlay src={this.props.url} onTimeUpdate={()=>this.timeUpdate()} ></audio>:null}
                    <div className={styles.playfooter}>
                        <ul>
                            <li><img src="./palyIcon/shuaxin.png"/></li>
                            <li onClick={()=>this.chanagePlay('prev')}><img src="./palyIcon/xiayishou1.png"/></li>
                            <li onClick={this.chageState.bind(this)}>{isPlay?<img src="./palyIcon/zanting.png"/>:<img src="./palyIcon/weibiaoti--.png"/>}</li>
                            <li onClick={()=>this.chanagePlay('next')}><img src="./palyIcon/xiayishou1.png"/></li>
                            <li><img src="./palyIcon/liebiao.png"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

