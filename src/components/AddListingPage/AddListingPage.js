import React from 'react';
import AddListingForm from '../AddListingForm/AddListingForm'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function AddListingPage(props) {

    // function handleAddSuccess() {
    //     const { history } = props
    //     history.push(`/list/:listId`)
    // }

    return (
        <div>
            <nav>
                <Link to='/list'>List Page</Link>
            </nav>
            <header>
                <h2>Fresh Share!</h2>
                <AddListingForm handleAdd={props.handleAdd} />
            </header>
        </div>

    )
}

export default withRouter(AddListingPage)