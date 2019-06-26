import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyListItem from '../MyListItem/MyListItem'
import { withRouter } from 'react-router-dom'
import ListApiService from '../../services/list-api-service'

class MyListPage extends Component {
    state = {
        // list: this.props.list,
        // myUserId: this.props.myUserId,
        myList: []
    }

    componentDidMount() {
        const myUserName = this.props.match.params.myUserName
        ListApiService.getMyList(myUserName)
            .then(myList => this.setState({ myList }))
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
        return (
            <div>
                <nav >
                    <Link to='/list'>List</Link>
                </nav>
                <h2>My List</h2>
                <MyListItem list={myList}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default withRouter(MyListPage)