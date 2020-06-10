import React from 'react';
import AddListingForm from '../AddListingForm/AddListingForm'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function AddListingPage(props) {

    return (
        <div>
            <nav>
                <Link to='/list'>List Page</Link>
            </nav>
            <header>
                <h2>Create a listing!</h2>
            </header>
            <AddListingForm handleAdd={props.handleAdd} myUserId={props.myUserId} />
        </div>

    )
}

export default withRouter(AddListingPage)