import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import PrivateRoute from '../src/Utils/PrivateRoute'
// import PublicOnlyRoute from '../src/Utils/PublicOnlyRoute'
import ListPage from './components/ListPage/ListPage'
import LandingPage from './components/LandingPage/LandingPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import LoginPage from './components/LoginPage/LoginPage'
import ListingPage from './components/ListingPage/ListingPage'
import AddListingPage from './components/AddListingPage/AddListingPage'
import EditListingPage from './components/EditListingPage/EditListingPage'
import MyListPage from './components/MyListPage/MyListPage'
// import UsersApiService from './services/users-api-service'
import config from '../src/config'

class App extends Component {
  state = {
    list: [],
    myUserName: '',
    myList: {},
    myUserId: null,
    editListing: null
  }

  getUserIdbyUsername = (username) => {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(users => users.filter(user => user.username === username))
      .then(user => user[0].id)
      .then(myUserId => this.setState({ myUserId }))
  }

  updateUserName = (myUserName) => {
    this.getUserIdbyUsername(myUserName)
    this.setState({ myUserName })
  }

  updateList = (list) => {
    this.setState({ list })
  }

  updateMyList = (myList) => {
    this.setState({ myList })
  }

  getEditListing = (id) => {
    const editListing = this.state.myList.filter(listing => listing.id === id)[0]
    console.log(editListing)
    this.setState({
      editListing
    })
  }

  //This gets data from state in AddListingPage to add to the end of this.state.list
  // updateAdd = (event, data) => {
  //   event.preventDefault()
  //   const tempData_myList = this.state.myList
  //   const tempData_listings = this.state.listings

  //   tempData_myList.push(data)
  //   tempData_listings.push(data)

  //   this.setState({
  //     list: tempData_listings,
  //     myList: tempData_myList
  //   })
  // }

  // handleDelete = (event) => {
  //   event.preventDefault()
  //   const deleteId = Number(event.target.name)
  //   const filteredList_myList = this.state.myList.filter(listing => listing.id !== deleteId)
  //   const filteredList_listings = this.state.list.filter(listing => listing.id !== deleteId)
  //   this.setState({
  //     myList: filteredList_myList,
  //     listings: filteredList_listings
  //   })
  // }
  // handleUpdate = (event, data) => {
  //   event.preventDefault()
  //   const tempData_myList = this.state.myList
  //   const dataToReplace_myList = tempData_myList.filter(item => item.id === data.id)
  //   const index_myList = this.state.myList.indexOf(dataToReplace_myList[0])
  //   tempData_myList.splice(index_myList, 1, data)

  //   const tempData_listings = this.state.list
  //   const dataToReplace_listings = tempData_listings.filter(item => item.id === data.id)
  //   const index_listings = this.state.list.indexOf(dataToReplace_listings[0])
  //   tempData_listings.splice(index_listings, 1, data)

  //   this.setState({
  //     list: tempData_listings,
  //     myList: tempData_myList
  //   })

  // }

  render() {
    return (
      <div className='App'>
        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}></Route>
            {/* done */}
            <Route
              exact
              path={'/list'}
              render={() => <ListPage updateList={this.updateList} list={this.state.list} myUserName={this.state.myUserName} />}></Route>
            {/* done */}
            <Route
              exact
              path={'/list/:listingId'}
              render={() => <ListingPage list={this.state.list} myUserName={this.state.myUserName} />}></Route>
            {/* done */}
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}></Route>
            <Route
              exact
              path={'/login'}
              render={() => <LoginPage handleUserName={this.updateUserName} />}></Route>
            {/* done */}
            <Route
              exact
              path={'/add'}
              render={() => <AddListingPage handleAdd={this.handleAdd} myUserId={this.state.myUserId} />}></Route>
            {/* done */}
            <Route
              exact
              path={'/:myUserName/'}
              render={() => <MyListPage updateMyList={this.updateMyList} getEditListing={this.getEditListing} myUserId={this.state.myUserId} myList={this.state.myList} />}></Route>
            {/* done */}
            <Route
              exact
              path={'/list/:listingId/edit'}
              render={() => <EditListingPage editListing={this.state.editListing} myUserName={this.state.myUserName} />}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App