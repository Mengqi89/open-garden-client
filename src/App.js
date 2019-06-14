import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListPage from './components/ListPage/ListPage'
import LandingPage from './components/LandingPage/LandingPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import LoginPage from './components/LoginPage/LoginPage'
import ListingPage from './components/ListingPage/ListingPage'
import AddListing from './components/AddListing/AddListing'

class App extends Component {

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
              component={ListPage}></Route>
            <Route
              exact
              path={'/list/:listId'}
              component={ListingPage}></Route>
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
              component={AddListing}></Route>
            <Route
              exact
              path={'/add'}
              component={AddListing}></Route>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;