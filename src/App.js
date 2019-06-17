import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListPage from './components/ListPage/ListPage'
import LandingPage from './components/LandingPage/LandingPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import LoginPage from './components/LoginPage/LoginPage'
import ListingPage from './components/ListingPage/ListingPage'
import AddListingPage from './components/AddListingPage/AddListingPage'
import MyList from './components/MyListPage/MyListPage'
import EditListingPage from './components/EditListingPage/EditListingPage'


const LISTINGS = [
  {
    id: 0,
    title: '5 organic tomatoes',
    summary: 'delicious tomatoes',
    address: '123 Lucky Lane, 84103',
    type: 'fruit',
    zip: '84103'
  },
  {
    id: 1,
    title: 'fresh peaches',
    summary: 'good peaches',
    address: '123 Sad Lane, 84102',
    type: 'fruit',
    zip: '84102'
  },
  {
    id: 2,
    title: 'one watermelon',
    summary: 'a giant watermelon',
    address: '311 Snake Lane, 84105',
    type: 'fruit',
    zip: '84105'
  },
  {
    id: 3,
    title: 'potatoes',
    summary: 'organic potatoes',
    address: '333 Trump Lane, 84103',
    type: 'vegetable',
    zip: '84103'
  }
]

class App extends Component {

  // state = {
  //   listings: LISTINGS
  // }

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
              render={() => <ListPage list={LISTINGS} />}></Route>
            <Route
              exact
              path={'/list/:listId'}
              render={() => <ListingPage list={LISTINGS} />}></Route>
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
              component={MyList}></Route>
            <Route
              exact
              path={'/edit'}
              component={EditListingPage}></Route>
            {/* how to implement edit page */}
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App