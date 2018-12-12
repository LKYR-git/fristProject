import React from 'react';
import styles from './Index.scss'
import {connect} from 'dva'
import { NavLink } from 'dva/router'
import RouterView from '../../router/RouterView';
import { Carousel, WingBlank } from 'antd-mobile';
class Index extends React.PureComponent{
  componentDidMount() {
    let {
      getbanner,
      getPersonalized
    } = this.props;
    getbanner();
    getPersonalized();
  }
  // goMusiclist(){
  //   this.props.history.push('/main/MusicList')
  // }
  render(){
    let {
      getBannerList,
      getPersonalizedList
    } = this.props;
    let NewPersonalizedList = getPersonalizedList.slice(0,6);
    console.log(NewPersonalizedList);
    return <div>
     <WingBlank>
        <Carousel
          autoplay
          infinite
        >
        {
          getBannerList.length>0 && getBannerList.map((v,i)=>{
            return <NavLink to="" key={i} 
                style={{height:"3rem"}}
              >
              <img
                src={v.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </NavLink>
          })
        }
        </Carousel>
      </WingBlank>

        <div className={styles.list}>
          <dl>
            <dt><img src="./assets/diantaizhibo.png"/></dt>
            <span>私人FM</span>
          </dl>
          <dl>
            <dt><img src="./assets/rili.png"/></dt>
            <span>每日推荐</span>
          </dl>
          <dl>
            <dt><img src="./assets/caidan.png"/></dt>
            <span><NavLink to='/main/MusicList'>歌单</NavLink></span>
          </dl>
          <dl>
            <dt><img src="./assets/paixingbang.png"/></dt>
            <span>排行榜</span>
          </dl>
      </div>
      <h3>推荐歌单<span>></span></h3>
      <div className={styles.listSong}>
          {
            NewPersonalizedList.length >0 && NewPersonalizedList.map((v,i)=>{
                return <dl key={i}>
                        <dt><img src={v.picUrl}/></dt>
                        <span>{v.name}</span>
                    </dl>
            })
          }
      </div>
    
    </div>
  }
}

const mapStateToProps = state => {
   let {getBannerList,getPersonalizedList} =state.IndexPage;
  return{
    getBannerList,
    getPersonalizedList
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getbanner:()=>{
      dispatch({
        type:'IndexPage/getbanner'
      })
    },
    getPersonalized:()=>{
      dispatch({
        type:'IndexPage/getPersonalized'
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);
// export default Index;