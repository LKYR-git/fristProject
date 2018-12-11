import React, { Component } from 'react'
import styles from './logins.scss';
import {connect} from 'dva';
//import PubSub from 'pubsub-js';
//es7修饰器
@connect(({logins})=>{
    console.log('state...',logins)
    return logins
},dispatch=>{
    return{
        login:payload=>{
            dispatch({
                type:'logins/login',
                payload
            })
        }
    }
})


class Logins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '17718445587',
            password: '147852.'
        }
    }

    submit(){
        console.log(this.props)
        if (!/\d{11}/.test(this.state.phone)){
          alert('请输入正确的手机号码');
          return;
        }
        if (!/\S{6,20}/.test(this.state.password)){
          alert('请输入正确的密码');
          return;
        }
        this.props.login({
          phone: this.state.phone,
          password: this.state.password
        })
        //PubSub.publish('myheadImg',this.props.logins);
      }

    render() {
        // if(!this.props.logins.profile){
        //     return null;
        // }
        //let {logins} = this.props;
        return (
            <div className={styles.loginWrap}>
                <header className={styles.loginHeader}>
                    <span>☚</span>
                    <span>手机号登录</span>
                    <span></span>
                </header>
                <div className={styles.inp}>
                    <p><input placeholder="手机号" maxLength="11" value={this.state.phone} 
                              onChange={e=>this.setState({phone:e.target.value})}/></p>
                    <p><input placeholder="密码" type="password" value={this.state.password}
                              onChange={e=>this.setState({password:e.target.value})}/></p>
                </div>
                <div className={styles.btnLogin}>
                    <span onClick={this.submit.bind(this)}>登录</span>
                </div>
            </div>
        )
    }
}

export default Logins;
