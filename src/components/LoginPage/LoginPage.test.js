import React from 'react'
import ReactDom from 'react-dom'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)

})