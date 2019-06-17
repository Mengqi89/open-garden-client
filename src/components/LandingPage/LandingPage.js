import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    state = {
        sum: null
    }

    // onPositionReceived = (position) => {
    //     console.log(position)
    // }

    // locationNotReceived = (positionError) => {
    //     console.log(positionError)
    // }

    handleSum = event => {
        event.preventDefault()
        this.setState({
            sum: 30
        })
        // navigator.geolocation.getCurrentPosition(this.onPositionReceived, this.locationNotReceived)
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
                    <form onClick={this.handleSum}>
                        <button type="submit">Find out!</button>
                    </form>
                    {this.state.sum}
                </div>
            </div>
        )
    }
}

export default LandingPage