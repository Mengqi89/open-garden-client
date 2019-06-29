import React, { Component } from 'react'
import ListApiService from '../../services/list-api-service'
import { Link } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {
    state = {
        zip: null,
        sum: null
    }

    handleSum = event => {
        event.preventDefault()
        const zip = this.state.zip
        ListApiService.getList()
            .then(list => list.filter(listing => listing.zip === zip))
            .then(filteredList => filteredList.length)
            .then(sum => this.setState({ sum }))

    }
    handleChange = event => {
        event.preventDefault()
        const zip = event.target.value
        this.setState({ zip })
    }

    render() {
        return (
            <div>
                <nav className='header'>
                    <Link className='header__login' to="/login">Login</Link>
                </nav>
                <section className='hero-container'>
                    <h1 className='App__name'>Open Garden</h1>
                    <div className='App__intro'>
                        <p>Share extra vegetables and fruit with your community.   </p>
                    </div>
                    <Link to="/register"><button className='join' type="submit">Join!</button></Link>
                </section>

                <div className='App_preview'>
                    <h2>How many members are sharing in your neighbhorhood?</h2>
                    <span className='sum'>{this.state.sum && this.state.sum}</span>
                    <form className='zip-form' onSubmit={this.handleSum}>
                        <label htmlFor='zip'></label>
                        <input type='text' id='zip' placeholder='Enter zipcode' name='zip' required onChange={this.handleChange} />
                        <button type='submit'>Find out!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LandingPage