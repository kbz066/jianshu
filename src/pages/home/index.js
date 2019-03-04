import React, { Component } from 'react'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'

import Topic from './components/Topic'


import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'




import {
    HomeWrapper,
    HomeWrapperFlex,
    HomeLeft,
    HomeRight,
    

} from './style'


class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeWrapperFlex>
                    <HomeLeft>
                        <img   alt=" "className="banner-pic" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>

                    </HomeRight>
                </HomeWrapperFlex>

            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
    }


}




let mapDispatchToProps=(dispatch)=>({
    changeHomeData:()=>{
        dispatch(actionCreators.getHomeData())
    }
})

export default connect(null,mapDispatchToProps)(Home);