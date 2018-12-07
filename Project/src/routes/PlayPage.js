import React, { Component } from 'react';
import {connect} from 'dva';
import styles from './PlayPage.scss';
import {formatTime} from '../utils/index';

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
    
    componentDidMount() {
        let id = this.props.match.params.id;
         this.props.getUrl(id);
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
    //暂停--播放
    chageState(){
        this.setState({
            isPlay:!this.state.isPlay
        },()=>{
            this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
        })
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
                    <span><img src="/public/palyIcon/xiangzuojiantou.png"/></span>
                    <div><span>{this.props.detail.name}--{this.props.detail.ar.name}</span></div>
                    <span></span>
                </div>
                <div className={styles.imgUrl}>
                    <div className={styles.url}>
                        <div className={styles.urls}>
                            <img  src={this.props.detail.al.picUrl}/>
                        </div>
                    </div>
                </div>
                <div className={styles.audio}>
                    <div className={styles.playTop}></div>
                    <div className={styles.playcontent}>
                        <span>{this.currentTime}</span>
                        <div>
                            <b ref="progress">
                                <span style={{width:this.state.progress+'%'}}></span>
                            </b>
                        </div>
                        <span>{this.duration}</span>
                    </div>
                    {this.props.url?<audio ref="audio" autoPlay src={this.props.url} onTimeUpdate={()=>this.timeUpdate()} ></audio>:null}
                    <div className={styles.playfooter}>
                        <ul>
                            <li><img src="../../public/palyIcon/shuaxin.png"/></li>
                            <li><img src="../../public/palyIcon/xiayishou1.png"/></li>
                            <li onClick={this.chageState.bind(this)}>{isPlay?<img src="../../public/palyIcon/zanting.png"/>:<img src="../../public/palyIcon/weibiaoti--.png"/>}</li>
                            <li><img src="../../public/palyIcon/xiayishou1.png"/></li>
                            <li><img src="../../public/palyIcon/liebiao.png"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
