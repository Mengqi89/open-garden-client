import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import MyListItem from '../MyListItem/MyListItem'
import { withRouter } from 'react-router-dom'
import ListApiService from '../../services/list-api-service'
import Header from '../Header/Header'

class MyListPage extends Component {
    state = {
        myList: []
    }

    componentDidMount() {
        const myUserName = this.props.match.params.myUserName
        ListApiService.getMyList(myUserName)
            .then(myList => {
                this.props.updateMyList(myList)
                this.setState({ myList })
            })
    }

    handleDelete = (event) => {
        event.preventDefault()
        const deleteId = Number(event.target.name)
        const myUserName = this.props.match.params.myUserName
        const myUserId = this.props.myUserId
        ListApiService.deleteListing(myUserName, deleteId)
            .then(listings => listings.filter(listing => listing.username === myUserId))
            .then(myList => this.setState({ myList }))
    }

    render() {
        const myList = this.state.myList
        const myUserName = this.props.match.params.myUserName
        return (
            <div>
                <Header username={myUserName} />
                <h2>My List</h2>
                <MyListItem list={myList}
                    handleDelete={this.handleDelete}
                    getEditListing={this.props.getEditListing}
                />
            </div>
        )
    }
}

export default withRouter(MyListPage)