import React, { Component } from 'react';

class MyListPage extends Component {
    state = {
        myList: [
            {
                id: 0,
                title: '5 organic tomatoes',
                type: 'vegetable',
                zip: '84103'
            },
            {
                id: 1,
                title: 'fresh peaches',
                type: 'fruit',
                zip: '84102'
            }
        ]
    }

    render() {
        return (
            <div>
                <h2>My List</h2>
                <ul>
                    {this.state.myList.map(listing => <li key={listing.id}>{listing.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default MyListPage