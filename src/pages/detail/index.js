import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'


import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHDetailData()
    }

}

let maoStateToProps = (state) => ({
    title: state.get("detail").get("title"),
    content: state.get("detail").get("content"),
})

let mapDispatchToProps=(dispatch)=>({
    changeHDetailData:()=>{
        dispatch(actionCreators.getDetailData())
    }
})

export default connect(maoStateToProps,mapDispatchToProps )(Detail)