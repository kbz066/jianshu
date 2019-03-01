import React, { Component } from 'react'

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store/publicExport'



import {
    HeaderWrapper,
    Logo,
    Nva,
    NvaItem,
    NvaSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'


class Header extends Component {


    getHotList(){
        if (this.props.focused||this.props.mouseIn) {
            let hotList=this.props.hotList
            let page=this.props.page;
            let totalPage=this.props.totalPage;
            let newList=[];
            if(hotList.length>0){
                newList=hotList.slice((page-1)*10,(page)*10);
            }
    



            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch onClick={()=>this.props.handleChangePage(page,totalPage,this.iconSpin)}>
                    <span ref={(spin)=>{this.iconSpin=spin}} className="iconfont  spin">&#xe615;</span>
                        换一批
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
    
                    <SearchInfoList>

                        {
                           
                            
                           newList.map((item)=>{
                                return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                       
                 

                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
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
                            <NvaSearch onFocus={()=>this.props.handleInputFocus(this.props.hotList)} onBlur={this.props.handleInputBlur} className={this.props.focused ? "focused" : ""} />
                        </CSSTransition>
                        <span className={this.props.focused ? "iconfont focused iconSearch" : "iconfont iconSearch"}>&#xe6e4;</span>
                        {
                            this.getHotList()
                        }
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

let mapStateToProps = (state) => {

    console.log()
    return {
        focused: state.getIn(["header", "focused"]),
        mouseIn:state.getIn(["header", "mouseIn"]),
        hotList:state.getIn(["header", "hotList"]),
        page:state.getIn(["header", "page"]),
        totalPage:state.getIn(["header", "totalPage"]),

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (hotList) => {

            if(hotList.size===0){
                dispatch(actionCreators.getHotList());
            }

            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur: () => {


            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter:()=>{
            dispatch(actionCreators.mouseEnter());

        },
        handleMouseLeave:()=>{
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage:(page,totalPage,icon)=>{

            let anger=icon.style.transform.replace(/[^0-9]/ig,"");
            if(anger){
                anger=parseInt(anger)
            }else{
                anger=0;
            }

   

           icon.style.transform = 'rotate('+(parseInt(anger)+360)+'deg)';


            if(page+1>totalPage){
                dispatch(actionCreators.changePage(1));
            }else{
                dispatch(actionCreators.changePage(page+1));

            }
            
    
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);