import React from 'react'
import './FilterOptions.css'

function FilterOptions(props) {
    return (
        <form className='FilterOptions'>
            <fieldset>
                <legend>Only see what you like:</legend>
                <input type='radio' name='listing-type' id='vegetable' value='vegetable' onChange={event => props.handleFilterChange(event.target.value)} />
                <label htmlFor='vegetable'>
                    <span>Vegetable</span>
                </label>

                <input type='radio' name='listing-type' id='fruit' value='fruit' onChange={event => props.handleFilterChange(event.target.value)} />
                <label htmlFor='fruit'>
                    <span>Fruit</span>
                </label>

                <input type='radio' name='listing-type' id='all' value='all' onChange={event => props.handleFilterChange(event.target.value)} />
                <label htmlFor='all'>
                    <span>All</span>
                </label>
            </fieldset>
        </form>
    )
}

export default FilterOptions;