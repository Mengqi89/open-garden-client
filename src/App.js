import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListPage from './components/ListPage/ListPage'
import LandingPage from './components/LandingPage/LandingPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import LoginPage from './components/LoginPage/LoginPage'
import ListingPage from './components/ListingPage/ListingPage'
import AddListingPage from './components/AddListingPage/AddListingPage'
import EditListingPage from './components/EditListingPage/EditListingPage'
import MyListPage from './components/MyListPage/MyListPage'

class App extends Component {
  state = {
    listings: [
      {
        id: 0,
        title: '5 organic tomatoes',
        summary: 'delicious tomatoes',
        address: '123 Lucky Lane, 84103',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84103'
      },
      {
        id: 1,
        title: 'fresh peaches',
        summary: 'good peaches',
        address: '123 Sad Lane, 84102',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84102'
      },
      {
        id: 2,
        title: 'one watermelon',
        summary: 'a giant watermelon',
        address: '311 Snake Lane, 84105',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84105'
      },
      {
        id: 3,
        title: 'potatoes',
        summary: 'organic potatoes',
        address: '333 Trump Lane, 84103',
        contact: 'dunder@dunder.net',
        type: 'vegetable',
        zip: '84103'
      },
      {
        id: 5,
        title: 'peaches',
        summary: 'good peaches',
        address: '123 Sad Lane, 84102',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84102'
      },
      {
        id: 9,
        title: 'watermelon',
        summary: 'a giant watermelon',
        address: '311 Snake Lane, 84105',
        type: 'fruit',
        zip: '84105'
      }
    ],
    myList: [
      {
        id: 0,
        title: '5 organic tomatoes',
        summary: 'delicious tomatoes',
        address: '123 Lucky Lane, 84103',
        contact: 'dunder@dunder.net',
        type: 'vegetable',
        zip: '84103'
      },
      {
        id: 5,
        title: 'peaches',
        summary: 'good peaches',
        address: '123 Sad Lane, 84102',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84102'
      },
      {
        id: 9,
        title: 'watermelon',
        summary: 'a giant watermelon',
        address: '311 Snake Lane, 84105',
        contact: 'dunder@dunder.net',
        type: 'fruit',
        zip: '84105'
      }
    ]
  }

  handleDelete = (event) => {
    event.preventDefault()
    const deleteId = Number(event.target.name)
    const filteredList = this.state.myList.filter(listing => listing.id !== deleteId)
    this.setState({
      myList: filteredList
    })
  }

  handleUpdate = (event, data) => {
    event.preventDefault()
    const tempData_myList = this.state.myList
    const dataToReplace_myList = tempData_myList.filter(item => item.id === data.id)
    const index_myList = this.state.myList.indexOf(dataToReplace_myList[0])
    tempData_myList.splice(index_myList, 1, data)

    const tempData_listings = this.state.listings
    const dataToReplace_listings = tempData_listings.filter(item => item.id === data.id)
    const index_listings = this.state.listings.indexOf(dataToReplace_listings[0])
    tempData_listings.splice(index_listings, 1, data)

    this.setState({
      listings: tempData_listings,
      myList: tempData_myList
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <main className='App__main'>
            <Route
              exact
              path={'/'}
              component={LandingPage}></Route>
            <Route
              exact
              path={'/list'}
              render={() => <ListPage list={this.state.listings} />}></Route>
            <Route
              exact
              path={'/list/:listId'}
              render={() => <ListingPage list={this.state.listings} />}></Route>
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}></Route>
            <Route
              exact
              path={'/login'}
              component={LoginPage}></Route>
            <Route
              exact
              path={'/add'}
              component={AddListingPage}></Route>
            <Route
              exact
              path={'/mylist'}
              render={() => <MyListPage myList={this.state.myList} handleDelete={this.handleDelete} />}></Route>
            <Route
              exact
              path={'/edit/:listId'}
              render={() => <EditListingPage myList={this.state.myList} handleUpdate={this.handleUpdate} />}></Route>
            {/* <Route
              exact
              path={'/edit/:listId'}
              render={() => <EditListingForm myList={this.state.myList} />}></Route> */}
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App