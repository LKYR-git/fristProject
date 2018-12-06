import React, { Component } from 'react';
import {connect} from 'dva';
@connect(({geturl})=>{
    console.log(geturl)
    return{
        geturl
    }
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
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getUrl(id);
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>歌曲播放页面</h1>
                {this.props.geturl.url?<audio src={this.props.geturl.url} autoPlay></audio>:null}
            </div>
        )
    }
}
