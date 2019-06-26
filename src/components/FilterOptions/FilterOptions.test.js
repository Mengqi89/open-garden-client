import React from 'react'
import ReactDom from 'react-dom'
import FilterOptions from './FilterOptions'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDom.render(<FilterOptions />, div)

    ReactDom.unmountComponentAtNode(div)

})