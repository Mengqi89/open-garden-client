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
        .map(listing => <li key={listing.id}><Link to={`/list/${listing.id}`}>{listing.title}</Link></li>)
    return (
        <div className='FilterableList'>
            {list}
        </div>
    )
}

export default FilterableList;