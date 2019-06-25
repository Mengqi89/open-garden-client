import React, { Component } from 'react'
import ListApiService from '../../services/list-api-service'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    state = {
        zip: null,
        sum: null
    }

    handleSum = event => {
        event.preventDefault()
        const zip = this.state.zip
        console.log(zip)
        ListApiService.getList()
            .then(list => list.filter(listing => listing.zip === zip))
            .then(filteredList => filteredList.length)
            .then(sum => this.setState({ sum }))

    }
    handleChange = event => {
        event.preventDefault()
        const zip = event.target.value
        console.log(event.target.value)
        this.setState({ zip })
    }

    render() {
        return (
            <div>
                <nav className='App__nav'>
                    <Link to="/login">Login</Link>
                </nav>
                <header>
                    <h1>Food Share</h1>
                    <Link to="/register"><button type="submit">Join!</button></Link>
                </header>
                <div className='App__intro'>
                    <p>Build a healthy and connected community by sharing vegetables and fruit with your neighbors</p>
                </div>
                <div className='App_preview'>
                    <h2>How many are sharing in your neighbhorhood?</h2>
                    <form onSubmit={this.handleSum}>
                        <label htmlFor='zip'>Zipcode: </label>
                        <input type='text' id='zip' placeholder='84103' name='zip' required onChange={this.handleChange} />
                        <button type='submit'>Find out!</button>
                    </form>
                    <span>{this.state.sum} </span>
                </div>
            </div>
        )
    }
}

export default LandingPage