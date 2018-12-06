import React from 'react';
import styles from './LoginPage.scss';

class LoginPage extends React.PureComponent{
    logins(){
        this.props.history.push('/logins');
    }
    render(){
        return <div className={styles.login}>
            <div className={styles.icon}>
                <img src="/public/assets/wangyiyunyinle (1).png"/>
            </div>
            <div className={styles.btn}>
                <p onClick={()=>{
                        this.logins()
                    }}><span>手机号登录</span></p>
                <p><span>注册</span></p>
            </div> 
        </div>
    }
}

export default LoginPage;
