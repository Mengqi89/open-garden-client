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
                onEditSuccess={handleEditSuccess}
                handleUpdate={props.handleUpdate} myList={props.myList} id={id} />
        </div>
    )
}

export default withRouter(EditListingPage)