import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ListApiService from '../../services/list-api-service'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
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

    printMessage = () => {
        if (this.state.sum === 1) {
            return `There is ${this.state.sum} listing.`
        } else {
            return `There are ${this.state.sum} listings.`
        }
    }

    handleDemoLoginSuccess(username) {
        const { history } = this.props
        history.push('/list')
        this.props.handleUserName(username)
    }

    handleDemo = (event) => {
        event.preventDefault()
        AuthApiService.postLogin({
            username: 'dunder10',
            password: '!Ww898989'
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.handleDemoLoginSuccess('dunder10')
            })
            .catch(res => {
                console.log(res.error)
            })
    }



    render() {
        return (
            <div>
                <nav className='header'>
                    <Link className='header__login' to="/login">Login</Link>
                    <form className='demo-button' onSubmit={(event) => this.handleDemo(event)}>
                        <button type='submit'>Demo</button>
                    </form>
                </nav>
                <section className='hero-container'>
                    <h1 className='App__name'>Open Garden</h1>
                    <div className='App__intro'>
                        <p>Share extra vegetables and fruit with your community.</p>
                        <ul>
                            <li>You can filter listings by zipcode and type(vegetable or fruit).</li>
                            <li>You can post, update and delete your own listings.</li>
                        </ul>
                    </div>
                    <Link to="/register"><button className='join' type="submit">Join!</button></Link>
                </section>

                <div className='App_preview'>
                    <h2>How many listings are there in your neighborhood?</h2>
                    <span className='sum'>{this.state.sum
                        && this.printMessage()}</span>
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

export default withRouter(LandingPage)