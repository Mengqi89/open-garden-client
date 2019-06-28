import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ListApiService from '../../services/list-api-service'
import Header from '../Header/Header'
import './ListingPage.css'

class ListingPage extends Component {

    state = {
        error: null,
        listing: []
    }

    componentDidMount() {
        const listingId = parseInt(this.props.match.params.listingId)
        ListApiService.getListing(listingId)
            .then(listing => this.setState({ listing }))
            .catch(res => {
                console.log('error caught')
                this.setState({ error: res.error })
            })
    }

    render() {
        const listing = this.state.listing
        const { error } = this.state
        return (
            <div>
                <Header username={this.props.myUserName} />

                <div role='alert'>{error && <p className='red'>{error}</p>}</div>
                <header>
                    <h2>{listing.title}</h2>
                </header>
                <section>
                    <div>
                        <h3>Summary</h3>
                        <p>{listing.summary}</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>{listing.type}</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>{listing.address}</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>{listing.contact}</p>
                    </div>
                    <div>
                        <h3>Zip</h3>
                        <p>{listing.zip}</p>
                    </div>
                </section>

            </div >
        )
    }

}

export default withRouter(ListingPage)