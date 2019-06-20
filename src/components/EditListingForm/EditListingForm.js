import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EditListingForm extends Component {
    state = {
        id: this.props.id,
        title: this.props.myList.filter(listing => listing.id === this.props.id)[0].title,
        summary: this.props.myList.filter(listing => listing.id === this.props.id)[0].summary,
        contact: this.props.myList.filter(listing => listing.id === this.props.id)[0].contact,
        address: this.props.myList.filter(listing => listing.id === this.props.id)[0].address,
        type: this.props.myList.filter(listing => listing.id === this.props.id)[0].type,
        zip: this.props.myList.filter(listing => listing.id === this.props.id)[0].zip
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
                <form onSubmit={(event) => this.props.handleUpdate(event, this.state)}>
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