import React from 'react';
import styles from './Index.scss';
import { SegmentedControl, WingBlank } from 'antd-mobile';
class Index extends React.PureComponent{
  render(){
    return <div className={styles.friendWrap}>
        <div className={styles.friendHeader}>
          <nav>
              <span><img src="../../../public/assets/friend.png"></img></span>
                <WingBlank size="lg" className={styles.scExample}>
                    <SegmentedControl values={['动态', '附近']} />
                  </WingBlank>
              <span><img src="../../public/assets/audio.png"></img></span>
            </nav>
        </div>
    </div>
  }
}

export default Index;
