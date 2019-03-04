import React, { Component } from 'react'

import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux'

class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                


                {
                    this.props.list.map((item)=>{

                
                        return (
                            <TopicItem key={item.get("id")}>
                                <img alt=" " className="topic-item-pic" src={item.get("imgUrl") }/>
                                {item.get("title")}
                            </TopicItem>
                        )
                    })
                }
      
            </TopicWrapper>
        )
    }
}

let mapStateToProps=(state)=>({
    list:state.get("home").get("topicList"),
})

let mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,null)(Topic)