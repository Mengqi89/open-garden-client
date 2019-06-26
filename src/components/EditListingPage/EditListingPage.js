import React from 'react'
import EditListingForm from '../EditListingForm/EditListingForm'
import { withRouter } from 'react-router-dom'

function EditListingPage(props) {

    const id = Number(props.match.params.listId)

    function handleEditSuccess() {
        const { history } = props
        history.push(`/list/${id}`)
    }

    return (
        <div className='EditListingPage'>
            <h2>Edit</h2>
            <EditListingForm
                editListing={props.editListing}
                onEditSuccess={handleEditSuccess}
                myUserName={props.myUserName} />
        </div>
    )
}

export default withRouter(EditListingPage)