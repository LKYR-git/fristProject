import React from 'react';
import styles from './Index.scss';
import {NavLink} from 'dva/router';
class Index extends React.PureComponent{
  render(){
    return <div className={styles.friendWrap}>
        <div className={styles.friendHeader}>
          <nav>
              <span><img src="./assets/friend.png"></img></span>
              <div className={styles.tab}><b>动态</b><b>附近</b></div>
              <span><img src="./assets/audio.png"></img></span>
            </nav>
        </div>
    </div>
  }
}

export default Index;
