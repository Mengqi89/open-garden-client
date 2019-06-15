import React from 'react';
import AddListingForm from '../AddListingForm/AddListingForm'

function AddListingPage(props) {
    function handleAddSuccess() {
        const { history } = props
        history.push('/list/:listId')
    }

    return (
        <div>
            <nav>
                <a href='/list'>List Page</a>
            </nav>
            <header>
                <h2>Fresh Share!</h2>
                <AddListingForm onAddSuccess={handleAddSuccess} />
            </header>
        </div>

    )
}

export default AddListingPage