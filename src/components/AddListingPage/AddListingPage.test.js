import React from 'react'
import ReactDom from 'react-dom'
import AddListingPage from './AddListingPage'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <AddListingPage />
        </BrowserRouter>, div)

    ReactDom.unmountComponentAtNode(div)

})