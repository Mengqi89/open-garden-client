import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import FilterableList from '../FilterableList/FilterableList'
import ListApiService from '../../services/list-api-service'
import Header from '../Header/Header'


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
        return (
            <div className='ListPage'>
                <Header username={this.props.myUserName} />
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