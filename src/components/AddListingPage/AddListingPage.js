import React from 'react';
import AddListingForm from '../AddListingForm/AddListingForm'

function AddListingPage(props) {
    function handleAddSuccess() {
        const { history } = props
        history.push('/list/:listId')
    }

    return (
        <header>
            <h2>Fresh Share!</h2>
            <AddListingForm onAddSuccess={handleAddSuccess} />
        </header>
    )
}

export default AddListingPage