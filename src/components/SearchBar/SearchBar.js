import React from 'react';
import SearchBox from '../SearchBox/SearchBox'
import FilterOptions from '../FilterOptions/FilterOptions'

function SearchBar(props) {
    return (
        <div className='SearchBar'>
            <h2>What's available in your neighborhood?</h2>
            <div className='SearchBar__controls'>
                <SearchBox handleZip={props.handleZip} />
                <FilterOptions handleFilterChange={props.handleFilterChange} />
            </div>
        </div>
    );
};

export default SearchBar;