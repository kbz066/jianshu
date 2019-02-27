import React, { Component } from 'react'



import {
    HeaderWrapper,
    Logo,
    Nva,
    NvaItem,
    NvaSearch,
    Addition,
    Button
} from './style'


class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nva>
                    <NvaItem className="left active"><span class="homeicon">&#xe60c;</span>首页</NvaItem>
                    <NvaItem className="left"><span class="iconfont">&#xe663;</span>下载App</NvaItem>
                    <NvaItem className="right">登录</NvaItem>
                    <NvaItem className="right"><span class="iconfont">&#xe636;</span></NvaItem>
                    <NvaSearch>
           
                    </NvaSearch>
                </Nva>
                <Addition>
                    <Button className="writting"><span class="iconfont">&#xe6a4;</span>写文章</Button>   
                    <Button className="reg">注册</Button>   
                </Addition>
            </HeaderWrapper>
        );
    }
}
export default Header