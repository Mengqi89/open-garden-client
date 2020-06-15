import React from 'react'
import { Link } from 'react-router-dom'
import './MyListItem.css'


function MyListItem(props) {

    const myList = props.list.map(listing =>
        <li key={listing.id}>
            <Link className='listing-title' to={`/list/${listing.id}`}>{listing.title}</Link>
            <div className='mypage-buttons'>
                <Link to={`/list/${listing.id}/edit`}>
                    <form onClick={() => props.getEditListing(listing.id)}>
                        <button type='click'>Edit</button>
                    </form>
                </Link>
                <form onSubmit={props.handleDelete} name={listing.id}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        </li>)

    return (
        <div className='MyListItem'>
            <ul className='list'>
                {myList}
            </ul>
        </div>
    )
}

export default MyListItem