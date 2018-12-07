import React, { Component } from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
import styles from './search.scss'
@connect(state=>{
    let {songs,songCount,hotList} =state.discover;
    return{
        songs,
        songCount,
        hotList
    }
},dispatch=>{
    return{
        search:payload=>{
            dispatch({
                type:'discover/search',
                payload
            })
        },
        hot:()=>{
            dispatch({
                type:'discover/hot'
            })
        }
    }
})
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state={
            falg:true
        }
    }
    
    componentDidMount() {
        this.props.hot()
    }
    
    search(){
        let search = this.refs.search.value;
        if(search){
            this.props.search(search);
        }
        this.setState({
            falg:false
        })
    }

    render() {
        let {songs,hotList} =this.props;
        let {falg} = this.state;
        return (
            <div className={styles.searchWrap}>
                <div className={styles.searchHeader}>
                    <p><input ref="search"  className={styles.inp} placeholder="再见  你好 - 金奇志" 
                        onBlur={this.search.bind(this)}
                    /></p>
                    <span>取消</span>
                </div>
                <div className={styles.searchList}>
                    <div className={styles.searchNav}>
                        <ul>
                            <li>综合</li>
                            <li>单曲</li>
                            <li>视频</li>
                            <li>歌手</li>
                            <li>专辑</li>
                        </ul>
                    </div>
                    {
                       falg && <div className={styles.hotList}>
                            <p>热门搜索</p>
                            <ol>
                                {
                                    hotList.length > 0 && hotList.map((v,i)=>{
                                        return <li key={i}>{v.first}</li>
                                    })
                                }
                            </ol>
                        </div>
                    }
                    <div className={styles.Lists}>
                        {
                            songs.map((v,i)=>{
                            return <Link to={`/play/${v.id}`}  key={i}>
                                    <div className={styles.List}>   
                                        <p>{v.name}</p>
                                        <p>{`${v.artists[0].name}-${v.album.name}`}</p>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
