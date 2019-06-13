import React from 'react';

function ListPage(props) {
    return (
        <div>
            <h1>What's available in your neighborhood</h1>

            <form>
                <input type="radio" name="listing-type" value="0" />
                <label for="listing-type">
                    <span>Vegetable</span>
                </label>

                <input type="radio" name="listing-type" value="1" />
                <label for="listing-type">
                    <span>Fruit</span>
                </label>
            </form>

            <ul>
                <li>5 organic tomatoes</li>
                <li>fresh peaches</li>
                <li>watermelon seeds</li>
                <li>5lbs potatoes</li>
            </ul>
        </div>
    );
};

export default ListPage;