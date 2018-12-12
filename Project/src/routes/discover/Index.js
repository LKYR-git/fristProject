import React from 'react';
import styles from './Index.scss'
import {NavLink} from 'dva/router';
import RouterView from '../../router/RouterView';
class Index extends React.PureComponent{
  render(){
    return <React.Fragment>
        <header>
            <nav>
            <span><img src="./assets/icon.png"></img></span>
            <div className={styles.inp}><NavLink to="/main/search"><input  placeholder="猜你喜欢 浮生"/></NavLink></div>
            <span><img src="./assets/audio.png"></img></span>
          </nav>
        </header>
        <div className={styles.tab}>
          <NavLink  to="/main/discover/anchor">
            <span>个性推荐</span>
          </NavLink>
          <NavLink to="/main/discover/personality">
            <span>主播电台</span>
          </NavLink>
        </div>
        <div className={styles.main}>
              <RouterView routes={this.props.routes}></RouterView>
        </div>
  </React.Fragment>
  }
}

export default Index;

