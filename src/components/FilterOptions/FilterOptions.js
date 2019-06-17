import React from 'react';

function FilterOptions(props) {
    return (
        <div>
            <form>
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
        </div>
    );
};

export default FilterOptions;