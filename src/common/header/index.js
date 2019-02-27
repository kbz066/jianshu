import React, { Component } from 'react'

import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'


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
                            in={this.props.focused}
                            timeout={200}
                            classNames="fade"
                        >
                            <NvaSearch  onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused ? "focused" : "" }/>
                        </CSSTransition>
                        <span className={this.props.focused ? "iconfont focused" : "iconfont"}>&#xe6e4;</span>
                    </SearchWrapper>
      
           
                </Nva>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe6a4;</span>写文章</Button>   
                    <Button className="reg">注册</Button>   
                </Addition>
            </HeaderWrapper>
        );
    }



}

let mapStateToProps=(state)=>{
    return{
        focused : state.header.focused,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus : ()=>{
            let action={
                type: "search_focus",
                focused:true
            }
         

            dispatch(action);
        },
        handleInputBlur : ()=>{
       
            let action={
                type: "search_blur",
                focused:false
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);