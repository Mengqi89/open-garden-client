import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import FilterableList from '../FilterableList/FilterableList'


class ListPage extends Component {
    state = {
        zip: '',
        filterOption: 'all'
    }

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
                    <Link to={`/mylist/${this.props.userId}`}>My List</Link>
                </nav>
                <Link to='/add'><button type='submit'>Start a Share!</button></Link>
                <SearchBar
                    handleZip={zip => this.updateZip(zip)}
                    handleFilterChange={option => this.updateFilterOption(option)} />
                <FilterableList
                    listings={this.props.list}
                    zip={this.state.zip}
                    option={this.state.filterOption} />
            </div>
        );
    }
}

export default ListPage;