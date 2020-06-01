import React from 'react';
import { Link } from 'react-router-dom'
import './FilterableList.css'

function FilterableList(props) {
    const { zip, option } = props

    function checkZip(listing) {
        if (zip === '') {
            return listing
        }
        if (listing.zip === zip) {
            return listing
        }
    }

    function checkType(listing) {
        if (option === 'all') {
            return listing
        }
        if (listing.type === option) {
            return listing
        }
    }

    const list = props.listings
        .filter(listing => checkZip(listing) && checkType(listing))
        .map(listing =>
            <Link to={`/list/${listing.id}`} key={listing.id} className='card'>
                <div className={listing.type}></div>
                <p className='card-description'>{listing.title}</p>
            </Link>)
    return (
        <div className='FilterableList'>
            {list}
        </div>
    )
}

export default FilterableList;