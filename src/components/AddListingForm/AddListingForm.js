import React, { Component } from 'react';

class AddListingForm extends Component {
    state = {
        listing_title: '',
        listing_summary: '',
        listing_type: '',
        contact: '',
        address: ''
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
        this.props.onAddSuccess(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='listing-title'>Title: </label><br />
                        <input id='listing-title' name='listing_title' type='text' placeholder='five tomatoes' required onChange={this.handleChange} />

                    </div>
                    <div>
                        <label htmlFor='listing-summary'>Summary: </label><br />
                        <textarea id='listing-summary' name='listing_summary' rows='10' onChange={this.handleChange} />
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
                        <input id='contact' name='contact' type='text' required onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input id='address' name='address' type='text' required onChange={this.handleChange} />
                    </div>
                    <button type='submit'>Share!</button>
                </form>
            </div>
        )
    }
}

export default AddListingForm

//1 class component
//2 state to hold all data
//3 onChange to send all data to state
//4 onSubmit to send the data somewhere