import React from 'react'
import { Link } from 'react-router-dom'
import MyListItem from '../MyListItem/MyListItem'

function MyListPage(props) {
    return (
        <div>
            <nav >
                <Link to='/list'>List</Link>
            </nav>
            <h2>My List</h2>
            <MyListItem list={props.myList} handleDelete={props.handleDelete} />
        </div>
    )
}

export default MyListPage