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
        const filteredList_myList = this.state.myList.filter(listing => listing.id !== deleteId)
        const filteredList_listings = this.state.listings.filter(listing => listing.id !== deleteId)
        console.log(deleteId)
        console.log(filteredList_myList)

        this.setState({
            myList: filteredList_myList,
            listings: filteredList_listings
        })
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
                    handleDelete={this.props.handleDelete}
                />
            </div>
        )
    }
}

export default withRouter(MyListPage)