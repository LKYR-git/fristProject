import React, { Component } from 'react'
import {connect} from 'dva'
import styles from './MusicList.scss';
@connect(({IndexPage})=>{
    console.log('state',IndexPage)
    return{
        IndexPage
    }
},dispatch=>{
   return{
        getMusicList:()=>{
            dispatch({
                type:"IndexPage/getMusicList"
            })
        }
   }
})
class MusicList extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    componentDidMount() {
        this.props.getMusicList();
    }
    
    render() {
        let {
            getmusiclist
        }=this.props.IndexPage;
        return (
            <div className={styles.musicWrap}>
                <div className={styles.musicHeader}>
                    <span><img src="./palyIcon/xiangzuojiantou.png"/></span>
                    <span>歌单</span>
                    <span><img src="./assets/audio.png"></img></span>
                </div>
                <div className={styles.musicContent}>
                    <div className={styles.musicNav}>
                        <h2><span>全部歌曲</span><span>〉</span></h2>
                        <ul>
                            <li>华语</li>
                            <li>民谣</li>
                            <li>说唱</li>
                        </ul>
                    </div>
                    <div className={styles.music}>
                        {
                            getmusiclist.map((v,i)=>{
                                return <div className={styles.musicList} key={i}>
                                    <span><img src={v.coverImgUrl}/></span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default MusicList;