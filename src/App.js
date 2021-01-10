import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import RenderError from './RenderError';
import ApiContext from './ApiContext';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Register from './Register/Register';
import SignIn from './SignIn/SignIn';
import MyCloset from './MyCloset/MyCloset';
import MyProfile from './MyProfile/MyProfile';
import NewItem from './NewItem/NewItem';
import MyItem from './MyItem/MyItem';
import EditUser from './EditUser/EditUser';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import Header from './Header/Header';
import EditItem from './EditItem/EditItem';

class App extends Component {
  state ={
    items: [],
  }

  handleDeleteUser = userId => {
    window.location.href='/'
  }
handleDeleteItem = itemId => {
  const newItems = this.state.items.filter(item =>
    item.id !== itemId)
    this.setState({
      items: newItems
    })
}

  clearItemsArray = () => {
    this.setState({items: []})
  }

  updateContextState = (resitems) => {
    if(resitems.length !== 0 && JSON.stringify(this.state.items) !== JSON.stringify(resitems) ){
      this.setState({items: resitems})}
  }

  renderNavRoutes(){
    return(
      <>
      <Link to="/" className="link"> | Home</Link> |
      <Link to="/my-closet" className="link"> My Closet </Link> |
      <Link to="/my-profile"className="link"> My Profile </Link> 
        </>
    )
  }

  RenderMainRoutes() {
    return (
     <>
      <Route
      exact
      path="/"
        component={LandingPage}/>
    <PublicOnlyRoute path="/register" component={Register} />
    <PublicOnlyRoute path="/sign-in" component={SignIn} />
    <PrivateRoute path="/my-closet" component={() => <MyCloset updateContextState={this.updateContextState} />} />
    <PrivateRoute path="/my-profile" component={MyProfile}/>
    <PrivateRoute path="/new-item" component={NewItem}/>
    <PrivateRoute path="/item/:itemId" component={MyItem}/>
    <PrivateRoute path="/edit-item/:itemId" component={EditItem}/>
    <PrivateRoute path="/edit-user" component={EditUser} />
    </>
    );
  }

  render(){
    const value = {
      items: this.state.items,
     deleteItem: this.handleDeleteItem,
      deleteUser: this.handleDeleteUser,
      updateContextState: this.updateContextState,
     };
    return(
     <ApiContext.Provider value={value}>
        <div className="App">
        <header className="App_header">
          <Header className="element" clearItemsArray={this.clearItemsArray}
          renderNavRoutes={this.renderNavRoutes}/>
          {/* <RenderError>
            <nav className="App_nav element">{this.renderNavRoutes()}</nav>
          </RenderError> */}
            <h1>
              <Link to="/" >
                <img className="logo" src="cc-logo.JPG" alt="Closet Catalogue Logo" />
              </Link>
              {' '}
            </h1>
          </header>
          <RenderError>
            <main className="App_main">{this.RenderMainRoutes()}</main>
          </RenderError>
        </div>
        </ApiContext.Provider>
    );
  }
}

export default App;