import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListPage extends Component {
    state = {
        all: [
            {
                id: 0,
                title: '5 organic tomatoes',
                type: 'vegetable',
                zip: '84103'
            },
            {
                id: 1,
                title: 'fresh peaches',
                type: 'fruit',
                zip: '84102'
            },
            {
                id: 2,
                title: 'one watermelon',
                type: 'fruit',
                zip: '84105'
            },
            {
                id: 3,
                title: 'potatoes',
                type: 'vegetable',
                zip: '84103'
            }
        ],
        listings: [],
        zip: ''
    }
    componentDidMount() {
        this.setState({
            listings: this.state.all
        })
    }
    handleZipChange = event => {
        const zip = event.target.value
        this.setState({
            zip
        })
        if (zip === '') {
            this.setState({
                listings: this.state.all
            })
        } else {
            const filteredList = this.state.all.filter(listing => listing.zip === zip)
            this.setState({
                listings: filteredList
            })
        }
    }
    handleTypeChange = event => {
        const query = event.target.value
        if (query === 'all') {
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
                <nav >
                    <Link to='/mylist'>My List</Link>
                </nav>
                <h1>What's available in your neighborhood</h1>
                <Link to='/add'><button type='submit'>Start a Share!</button></Link>
                <form onChange={this.handleZipChange}>
                    <label htmlFor='zip'>Enter zipcode: </label>
                    <input type='text' name='listing-zip' id='zip' placeholder='84103'></input>
                </form>
                <form onChange={this.handleTypeChange}>
                    <fieldset>
                        <legend>Only see what you like:</legend>
                        <input type='radio' name='listing-type' id='vegetable' value='vegetable' />
                        <label htmlFor='vegetable'>
                            <span>Vegetable</span>
                        </label>

                        <input type='radio' name='listing-type' id='fruit' value='fruit' />
                        <label htmlFor='fruit'>
                            <span>Fruit</span>
                        </label>

                        <input type='radio' name='listing-type' id='all' value='all' />
                        <label htmlFor='all'>
                            <span>All</span>
                        </label>
                    </fieldset>
                </form>
                <ul>
                    {this.state.listings.map(listing => <li key={listing.id}>{listing.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default ListPage;