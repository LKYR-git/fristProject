import React from 'react';
import styles from './Index.scss';
import {NavLink} from 'dva/router';
import { SegmentedControl, WingBlank } from 'antd-mobile';
class Index extends React.PureComponent{
  render(){
    return <div className={styles.videoWrap}>
        <div className={styles.videoHeader}>
          <nav>
              <span><img src="../../public/assets/icon.png"></img></span>
              <div className={styles.inp}><NavLink to="/main/search"><input  placeholder="猜你喜欢 浮生"/></NavLink></div>
              <span><img src="../../public/assets/audio.png"></img></span>
          </nav>
        </div>
    </div>
  }
}

export default Index;