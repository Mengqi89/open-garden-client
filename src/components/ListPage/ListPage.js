import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import FilterableList from '../FilterableList/FilterableList'
import ListApiService from '../../services/list-api-service'


class ListPage extends Component {

    state = {
        zip: '',
        filterOption: 'all',
        list: []
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

    componentDidMount() {
        ListApiService.getList()
            .then(list => this.props.updateList(list)
            )
    }

    render() {
        const list = this.props.list
        const username = this.props.myUserName
        return (
            <div className='App__home'>
                <nav >
                    <Link to={`/${username}/`}>My List</Link>
                </nav>

                <Link to='/add'><button type='submit'>Start a Share!</button></Link>

                <SearchBar
                    handleZip={zip => this.updateZip(zip)}
                    handleFilterChange={option => this.updateFilterOption(option)} />
                <FilterableList
                    listings={list}
                    zip={this.state.zip}
                    option={this.state.filterOption} />
            </div>
        );
    }
}

export default ListPage;