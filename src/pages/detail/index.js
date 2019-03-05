import React, { Component } from 'react'
import { connect } from 'react-redux'

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
}

let maoStateToProps = (state) => ({
    title: state.get("detail").get("title"),
    content: state.get("detail").get("content"),
})

export default connect(maoStateToProps, null)(Detail)