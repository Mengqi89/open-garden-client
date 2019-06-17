import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import FilterableList from '../FilterableList/FilterableList'



class ListPage extends Component {
    state = {
        zip: '',
        filterOption: 'all'
    }

    // componentDidMount() {
    //     this.setState({
    //         listings: this.state.all
    //     })
    // }

    // handleZipChange = event => {
    //     const zip = event.target.value
    //     this.setState({
    //         zip
    //     })
    //     if (zip === '') {
    //         this.setState({
    //             listings: this.state.all
    //         })
    //     } else {
    //         const filteredList = this.state.all.filter(listing => listing.zip === zip)
    //         this.setState({
    //             listings: filteredList
    //         })
    //     }
    // }
    // handleTypeChange = event => {
    //     const query = event.target.value
    //     if (query === 'all') {
    //         this.setState({
    //             listings: this.state.all
    //         })
    //     } else {
    //         const filteredList = this.state.all.filter(listing => listing.type === query)
    //         this.setState({
    //             listings: filteredList
    //         })
    //     }
    // }
    updateZip(zip) {
        this.setState({
            zip
        })
    }

    updateFilterOption(option) {
        this.setState({
            filterOption: option
        })
    }

    render() {
        return (
            <div className='App__home'>
                <nav >
                    <Link to='/mylist'>My List</Link>
                </nav>
                <Link to='/add'><button type='submit'>Start a Share!</button></Link>
                <SearchBar
                    handleZip={zip => this.updateZip(zip)}
                    handleFilterChange={option => this.updateFilterOption(option)} />
                <FilterableList
                    listings={LISTINGS}
                    zip={this.state.zip}
                    option={this.state.filterOption} />
            </div>
        );
    }
}

export default ListPage;