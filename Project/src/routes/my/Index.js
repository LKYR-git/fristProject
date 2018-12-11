import React from 'react';
import styles from './Index.scss';
import { Accordion, List } from 'antd-mobile';
class Index extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state={

    }
  }
  render(){
    return <div className={styles.myWrap}>
        <div className={styles.myHeader}>我的音乐</div>
        <div className={styles.myContent}>
            <div className={styles.myList}>
                <div><span></span><span>本地音乐</span><span>1 〉</span></div>
                <div><span></span><span>最近播放</span><span>110 〉</span></div>
                <div><span></span><span>我的电台</span><span>1 〉</span></div>
                <div><span></span><span>我的收藏</span><span>专辑/歌手/视频/专栏 〉</span></div>
                <div><span></span><span>Sati空间</span><span>特别的聆听模式 〉</span></div>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <Accordion accordion openAnimation={{}} className={styles.myaccordion} onChange={this.onChange}>
                <Accordion.Panel header="我创建的歌单(1)">
                  <List className={styles.mylist}>
                    <List.Item>
                      <div>
                            我喜欢的音乐
                        </div>
                    </List.Item>
                  </List>
                </Accordion.Panel>
                <Accordion.Panel header="我收藏的歌单(2)" className={styles.pad}>
                  <List.Item>
                    <div>
                      90后的回忆杀 - 「持续更新」
                    </div>
                  </List.Item>
                </Accordion.Panel>
              </Accordion>
            </div>
        </div>
    </div>
  }
}

export default Index;