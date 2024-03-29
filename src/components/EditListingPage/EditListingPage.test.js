import React from 'react'
import ReactDom from 'react-dom'
import EditListingPage from './EditListingPage'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <EditListingPage />
        </BrowserRouter>, div)

    ReactDom.unmountComponentAtNode(div)

})