import React from 'react';
import './SearchBox.css'

function SearchBox(props) {
    return (
        <div className='SearchBox'>
            <form>
                <input
                    onChange={event => props.handleZip(event.target.value)}
                    id='zip'
                    placeholder='Enter zip'></input>
            </form>
        </div>
    );
};

export default SearchBox;