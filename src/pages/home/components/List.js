import React, { Component } from 'react'
import { ListWrapper, ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'



class List extends Component {
    render() {
        return (
            <ListWrapper>

                {
                    this.props.list.map((item) => {

                        return (
                            <ListItem key={item.get("id")}>

                                <ListInfo>
                                    <h3>{item.get("title")}</h3>
                                    <p>{item.get("desc") }</p>
                                </ListInfo>

                                <img src={item.get("imgUrl")} />

                            </ListItem>
                        )
                    })
                }

            </ListWrapper>
        )
    }
}

let mapStateToProps = (state) => ({
    list: state.get("home").get("articleList"),
})



export default connect(mapStateToProps, null)(List)