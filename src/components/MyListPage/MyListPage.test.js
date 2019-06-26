import React from 'react'
import ReactDom from 'react-dom'
import MyListPage from './MyListPage'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {

    const div = document.createElement('div')

    ReactDom.render(
        <BrowserRouter>
            <MyListPage />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)

})