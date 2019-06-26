import React from 'react'
import ReactDom from 'react-dom'
import MyListItem from './MyListItem'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const listings = [{
        "id": 5,
        "title": "title 5",
        "summary": "summary 5",
        "address": "Address 5",
        "contact": "email5@email.com",
        "type": "fruit",
        "zip": "84102",
        "username": 5
    },
    {
        "id": 6,
        "title": "title 6",
        "summary": "summary 6",
        "address": "Address 6",
        "contact": "email6@email.com",
        "type": "fruit",
        "zip": "84102",
        "username": 6
    }]
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <MyListItem list={listings} />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)

})