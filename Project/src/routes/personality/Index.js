import React from 'react';
import styles from './Index.scss'
import {connect} from 'dva'
import { NavLink } from 'dva/router'
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
  render(){
    
    let {
      getBannerList,
      getPersonalizedList
    } = this.props;
    let NewPersonalizedList = getPersonalizedList.slice(0,6);
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
            <dt><img src="./assets/caidan.png"/></dt>
            <span>电台分类</span>
          </dl>
          <dl>
            <dt><img src="./assets/paihangbang.png"/></dt>
            <span>电台排行</span>
          </dl>
          <dl>
            <dt><img src="./assets/dianyin.png"/></dt>
            <span>DI电音</span>
          </dl>
          <dl>
            <dt><img src="./assets/xuegao.png"/></dt>
            <span>小冰电台</span>
          </dl>
      </div>
      <p><span>今日优选</span><span>换一换</span></p>
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