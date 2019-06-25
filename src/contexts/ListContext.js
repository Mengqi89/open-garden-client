import React, { Component } from 'react'

const ListContext = React.createContext({
    list: []
})

export default ListContext

export class ListProvider extends Component {
    state = {
        list: []
    }

    setList = list => {
        this.setState({ list })
    }

    render() {
        const value = {
            list: this.state.list
        }
        return (
            <ListContext.Provider value={value} >
                {this.props.children}
            </ListContext.Provider>
        )
    }
}