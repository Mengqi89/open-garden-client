import React from 'react'
import ReactDom from 'react-dom'
import SearchBox from './SearchBox'

it('renders without crashing', () => {

    const div = document.createElement('div')

    ReactDom.render(
        <SearchBox />, div)

    ReactDom.unmountComponentAtNode(div)

})