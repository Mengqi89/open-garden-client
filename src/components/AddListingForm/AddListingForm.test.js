import React from 'react'
import ReactDom from 'react-dom'
import AddListingForm from './AddListingForm'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <AddListingForm />
        </BrowserRouter>, div)

    ReactDom.unmountComponentAtNode(div)

})