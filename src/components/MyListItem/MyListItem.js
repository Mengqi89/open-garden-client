import React from 'react'
import { Link } from 'react-router-dom'


function MyListItem(props) {

    const myList = props.list.map(listing =>
        <li key={listing.id}>
            <Link to={`/list/${listing.id}`}>{listing.title}</Link>
            <Link to={`/list/${listing.id}/edit`}>
                <form onClick={() => props.getEditListing(listing.id)}>
                    <button type='click'>Edit</button>
                </form>
            </Link>
            <form onSubmit={props.handleDelete} name={listing.id}>
                <button type='submit'>Delete</button>
            </form>
        </li>)

    return (
        <div className='MyListItem'>
            <ul className='mylist_item'>
                {myList}
            </ul>
        </div>
    )
}

export default MyListItem