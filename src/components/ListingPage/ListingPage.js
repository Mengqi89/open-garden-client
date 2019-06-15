import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListingPage extends Component {
    state = {
        id: 0,
        listing_title: '5 organic tomatoes',
        listing_summary: 'delicious vegetables',
        listing_type: 'vegetable',
        contact: 'dunder@dunder.net',
        address: 'dunder residence, Washington DC, USA'
    }

    render() {
        return (
            <div>
                <nav >
                    <Link to='/mylist'>My List</Link> <br />
                    <Link to='/list'>List</Link>
                </nav>
                <header>
                    <h2>{this.state.listing_title}</h2>
                </header>
                <section>
                    <div>
                        <h3>Summary</h3>
                        <p>{this.state.listing_summary}</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>{this.state.listing_type}</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>{this.state.address}</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>{this.state.contact}</p>
                    </div>
                </section>

            </div>
        );
    }
}

export default ListingPage;