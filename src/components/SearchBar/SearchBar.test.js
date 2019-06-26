import React from 'react'
import ReactDom from 'react-dom'
import SearchBar from './SearchBar'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(
        <SearchBar />
        , div)

    ReactDom.unmountComponentAtNode(div)

})