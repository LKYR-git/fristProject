import React from 'react';
import styles from './Index.scss';
class Index extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state={

    }
  }
  render(){
    return <div className={styles.accountWrap}>
        <div className={styles.accountHeader}>账号</div>
        <div className={styles.accountContent}>
            <div className={styles.accountMessge}>
              <div className={styles.top}>
                  <div className={styles.imgs}>
                    <span>
                        <img src='../../../public/assets/wangyiyunyinle (1).png' />
                    </span>
                  </div>
                  <span>浪客游人</span>
                  <span>签到</span>
              </div>
              <div className={styles.bottom}>
                <dl>
                  <dt>动态</dt>
                  <dd>1</dd>
                </dl>
                <dl>
                  <dt>关注</dt>
                  <dd>3</dd>
                </dl>
                <dl>
                  <dt>粉丝</dt>
                  <dd>1</dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd>我的资料</dd>
                </dl>
              </div>
            </div>
            <div className={styles.accountList}>
                <div><span></span><span>我的消息</span></div>
                <div><span></span><span>会员中心</span></div>
                <div><span></span><span>商城</span></div>
                <div><span></span><span>游戏推荐:明日之后</span></div>
                <div><span></span><span>在线听歌免流量</span></div>
                <div><span></span><span>设置</span></div>
                <div><span></span><span>扫一扫</span></div>
                <div><span></span><span>个性换肤</span></div>
                <div><span></span><span>夜间模式</span></div>
                <div><span></span><span>定时关闭</span></div>
                <div><span></span><span>音乐闹钟</span></div>
                <div><span></span><span>驾驶模式</span></div>
                <div><span></span><span>亲子模式</span></div>
                <div><span></span><span>小冰电台</span></div>
                <div><span></span><span>优惠券</span></div>
                <div><span></span><span>加入网易音乐人</span></div>
                <div><span></span><span>分享网易云音乐</span></div>
                <div><span></span><span>关于</span></div>
                <div><span>退出登录</span></div>
            </div>
        </div>
    </div>
  }
}

export default Index;
