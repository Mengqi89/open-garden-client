import React from 'react'
import EditListingForm from '../EditListingForm/EditListingForm'

function EditListingPage(props) {
    function handleEditSuccess() {
        const { history } = props
        history.push('/list/:listId')
    }

    return (
        <div className='EditListingPage'>
            <h2>Edit</h2>
            <EditListingForm onEditSuccess={handleEditSuccess} />
        </div>
    )

}

export default EditListingPage;