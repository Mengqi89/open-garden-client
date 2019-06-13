import React, { Component } from 'react';


class ListPage extends Component {

    state = {
        all: [
            {
                id: 0,
                title: '5 organic tomatoes',
                type: 'vegetable'
            },
            {
                id: 1,
                title: 'fresh peaches',
                type: 'fruit'
            },
            {
                id: 2,
                title: 'one watermelon',
                type: 'fruit'
            },
            {
                id: 3,
                title: 'potatoes',
                type: 'vegetable'
            }
        ],
        listings: []
    }

    componentDidMount() {
        this.setState({
            listings: this.state.all
        })
    }

    handleChange = (event) => {
        const query = event.target.value
        if (query === "all") {
            this.setState({
                listings: this.state.all
            })
        } else {
            const filteredList = this.state.all.filter(listing => listing.type === query)
            this.setState({
                listings: filteredList
            })
        }

    }

    render() {
        return (
            <div>
                <h1>What's available in your neighborhood</h1>

                <form onChange={this.handleChange}>
                    <input type="radio" name="listing-type" id="vegetable" value="vegetable" />
                    <label htmlFor="vegetable">
                        <span>Vegetable</span>
                    </label>

                    <input type="radio" name="listing-type" id="fruit" value="fruit" />
                    <label htmlFor="fruit">
                        <span>Fruit</span>
                    </label>

                    <input type="radio" name="listing-type" id="all" value="all" />
                    <label htmlFor="all">
                        <span>All</span>
                    </label>
                </form>

                <ul>
                    {this.state.listings.map(listing => <li key={listing.id}>{listing.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default ListPage;