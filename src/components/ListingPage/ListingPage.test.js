import React from 'react'
import ReactDom from 'react-dom'
import ListingPage from './ListingPage'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <ListingPage />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)

})