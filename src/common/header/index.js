import React, { Component } from 'react'

import { CSSTransition } from 'react-transition-group';

import {
    HeaderWrapper,
    Logo,
    Nva,
    NvaItem,
    NvaSearch,
    SearchWrapper,
    Addition,
    Button
} from './style'


class Header extends Component{

    constructor(){
        super();
        this.state={
            focused:false,
        }
    }
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nva>
                    <NvaItem className="left active"><span className="homeicon">&#xe60c;</span>首页</NvaItem>
                    <NvaItem className="left"><span className="iconfont">&#xe663;</span>下载App</NvaItem>
                    <NvaItem className="right">登录</NvaItem>
                    <NvaItem className="right"><span className="iconfont">&#xe636;</span></NvaItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={this.state.focused}
                            timeout={200}
                            classNames="fade"
                        >
                            <NvaSearch  onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.state.focused ? "focused" : "" }/>
                        </CSSTransition>
                        <span className={this.state.focused ? "iconfont focused" : "iconfont"}>&#xe6e4;</span>
                    </SearchWrapper>
      
           
                </Nva>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe6a4;</span>写文章</Button>   
                    <Button className="reg">注册</Button>   
                </Addition>
            </HeaderWrapper>
        );
    }

    handleInputFocus=()=>{
        this.setState({
            focused:true,
        })
    }
    handleInputBlur=()=>{
        this.setState({
            focused:false
        })
    }
}
export default Header