import React, { Component } from 'react'
import { ListWrapper, ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'




class List extends Component {
    render() {
        return (
            <ListWrapper>

                {
                    this.props.list.map((item) => {

                        return (

                            <Link key={item.get("id")} to={"/detail"}>
                                <ListItem >

                                    <ListInfo>
                                        <h3>{item.get("title")}</h3>
                                        <p>{item.get("desc")}</p>
                                    </ListInfo>

                                    <img src={item.get("imgUrl")} />

                                </ListItem>
                            </Link>

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