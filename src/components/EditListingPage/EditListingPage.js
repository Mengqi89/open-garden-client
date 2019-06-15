import React, { Component } from 'react';

class EditListingPage extends Component {
    state = {
        id: 0,
        listing_title: '5 organic tomatoes',
        listing_summary: 'delicious vegetables',
        listing_type: 'vegetable',
        contact: 'dunder@dunder.net',
        address: 'dunder residence, Washington DC, USA'
    }
    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        window.localStorage.setItem('Form Data', this.state)
        this.props.onAddSuccess()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='listing-title'>Title: </label><br />
                        <input id='listing-title' name='listing_title' type='text' placeholder='five tomatoes' value={this.state.listing_title} onChange={this.handleChange} required />

                    </div>
                    <div>
                        <label htmlFor='listing-summary'>Summary: </label><br />
                        <textarea id='listing-summary' name='listing_summary' rows='10' value={this.state.listing_summary} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Select listing type</p>
                        <input type='radio' id='vegetable' name='listing_type' value='vegetable' onChange={this.handleChange} />
                        <label htmlFor='vegetable'>vegetable</label>

                        <input type='radio' id='fruit' name='listing_type' value='fruit' onChange={this.handleChange}></input>
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
                    <button type='submit'>Update</button>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default EditListingPage;