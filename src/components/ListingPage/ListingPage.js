import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import ListApiService from '../../services/list-api-service'

class ListingPage extends Component {

    state = { listing: [] }

    componentDidMount() {
        const listingId = parseInt(this.props.match.params.listingId)
        ListApiService.getListing(listingId)
            .then(listing => this.setState({ listing }))
    }

    render() {
        const listing = this.state.listing
        console.log(this.props.list)
        console.log(listing)
        return (
            <div>
                <nav >
                    <Link to={`/dunder1/`}>My List</Link> <br />
                    <Link to='/list'>List</Link>
                </nav>
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