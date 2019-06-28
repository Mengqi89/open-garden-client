import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
    return (
        <nav >
            <Link to='/list'>List</Link>
            <Link to={`/${props.username}`}>My List</Link>
            <Link to='/add'>Share</Link>
        </nav>
    )
}

export default Header