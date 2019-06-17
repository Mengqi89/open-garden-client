import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MyListPage extends Component {
    state = {
        myList: [
            {
                id: 0,
                title: '5 organic tomatoes',
                type: 'vegetable',
                zip: '84103'
            },
            {
                id: 1,
                title: 'fresh peaches',
                type: 'fruit',
                zip: '84102'
            }
        ]
    }

    handleDelete = (event) => {
        event.preventDefault()
        const deleteId = Number(event.target.name)
        const filteredList = this.state.myList.filter(listing => listing.id !== deleteId)
        this.setState({
            myList: filteredList
        })
    }
    render() {
        return (
            <div>
                <nav >
                    <Link to='/list'>List</Link>
                </nav>
                <h2>My List</h2>
                <ul>
                    {this.state.myList.map(listing =>
                        <li key={listing.id}>
                            <Link to={`/list/${listing.id}`}>{listing.title}</Link>
                            <Link to='/edit'><button>Edit</button></Link>
                            <form onSubmit={this.handleDelete} name={listing.id}>
                                <button type='submit'>Delete</button>
                            </form>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default MyListPage