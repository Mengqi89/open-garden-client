import React, { Component } from 'react'

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
                    <a href="/login">Login</a>
                </nav>
                <header>
                    <h1>Food Share</h1>
                    <form action="/register">
                        <button type="submit">Join!</button>
                    </form>
                </header>
                <div>
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