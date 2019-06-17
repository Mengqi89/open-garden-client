import React from 'react';

function SearchBox(props) {
    return (
        <div className='SearchBox'>
            <form>
                <label htmlFor='zip'>Enter zip code: </label>
                <input
                    onChange={event => props.handleZip(event.target.value)}
                    id='zip'
                    placeholder='84103'></input>
            </form>
        </div>
    );
};

export default SearchBox;