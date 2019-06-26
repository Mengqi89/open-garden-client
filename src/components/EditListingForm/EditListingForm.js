import React, { Component } from 'react'
import ListApiService from '../../services/list-api-service'
import { withRouter } from 'react-router-dom'

class EditListingForm extends Component {

    static defaultProps = {
        editListing: {}
    }

    state = {
        title: this.props.editListing.title,
        summary: this.props.editListing.summary,
        address: this.props.editListing.address,
        type: this.props.editListing.type,
        contact: this.props.editListing.contact,
        zip: this.props.editListing.zip
    }

    handleUpdateSuccess = (listingId) => {
        const { history } = this.props
        console.log(listingId)
        history.push(`/list/${listingId}`)
    }

    handleUpdate = (event, listing) => {
        event.preventDefault()
        const listingId = parseInt(this.props.match.params.listingId)
        const username = this.props.myUserName
        console.log(listing)
        ListApiService.patchListing(username, listingId, listing)
            .then(listing => listing.id)
            .then(listingId => this.handleUpdateSuccess(listingId))
    }

    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleUpdate(event, this.state)}>
                    <div>
                        <label htmlFor='listing-title'>Title: </label><br />
                        <input id='listing-title' name='title' type='text' placeholder='five tomatoes' value={this.state.title} onChange={this.handleChange} required />

                    </div>
                    <div>
                        <label htmlFor='listing-summary'>Summary: </label><br />
                        <textarea id='listing-summary' name='summary' rows='10' value={this.state.summary} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Select listing type</p>
                        <input type='radio' id='vegetable' name='type' checked={this.state.type === 'vegetable'} value='vegetable' onChange={this.handleChange} />
                        <label htmlFor='vegetable'>vegetable</label>

                        <input type='radio' id='fruit' name='type' checked={this.state.type === 'fruit'} value='fruit' onChange={this.handleChange}></input>
                        <label htmlFor='fruit'>fruit</label>
                    </div>
                    <div>
                        <label htmlFor='contact'>Email/Cell</label>
                        <input id='contact' name='contact' type='text' value={this.state.contact} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input id='address' name='address' type='text' value={this.state.address} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor='zip'>Zip</label>
                        <input id='zip' name='zip' type='text' value={this.state.zip} onChange={this.handleChange} required />
                    </div>
                    <button type='submit'>Update</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditListingForm);