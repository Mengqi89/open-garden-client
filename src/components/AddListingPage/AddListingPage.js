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
                <h2>Fresh Share!</h2>
                <AddListingForm handleAdd={props.handleAdd} myUserId={props.myUserId} />
            </header>
        </div>

    )
}

export default withRouter(AddListingPage)