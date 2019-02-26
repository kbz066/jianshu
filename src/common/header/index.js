import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo,
    Nva,
    NvaItem
} from './style'


class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nva>
                    <NvaItem className="left active">首页</NvaItem>
                    <NvaItem className="left">下载App</NvaItem>
                    <NvaItem className="right">登录</NvaItem>
                    <NvaItem className="right">Aa</NvaItem>
                </Nva>
            </HeaderWrapper>
        );
    }
}
export default Header