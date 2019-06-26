import React from 'react'
import ReactDom from 'react-dom'
import ListPage from './ListPage'
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
    }]

    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <ListPage list={listings} zip={'84103'} option={'vegetable'} />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)

})