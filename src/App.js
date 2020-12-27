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
import config from './config';
import EditItem from './EditItem/EditItem';

class App extends Component {
  state ={
    items: [],
  }
  // state = {
  //   items: [],
  //   user: {},
  // };

  // componentDidMount(){
  //   //GET request to /items/userId
  //   // localhost/items/userID => data
  //   //set context with array of items for user id=1

  //   fetch(`${config.API_ENDPOINT}/items`, {
  //     method:'GET',
  //     headers: {
  //       'content-type '
  //     }
  //   })

  //   .then(([itemsRes, usersRes]) => {
  //     if(!itemsRes.ok)
  //     return itemsRes.json().then(e => 
  //     reject(e));

  //     return itemsRes.json();
  //   })

  //   .then(([items, users]) => {
  //     this.setState({items, users})
  //   })

  //   .catch(error =>{
  //     console.error({error});
  //   });
  // }
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
    if(this.state.items ==! resitems || this.state.items === []){
    this.setState({items: resitems})}
  }

  renderNavRoutes(){
    return(
      <>
      <Link to="/">Home</Link>
      <Link to="/my-closet"> My Closet </Link>
      <Link to="/my-profile"> My Profile </Link>
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
    <PrivateRoute path="/edit-user/:userId" component={EditUser} />
    </>
    );
  }

  render(){
    const value = {
      items: this.state.items,
     deleteItem: this.handleDeleteItem,
    //   deleteUser: this.handleDeleteUser
     };
    return(
     <ApiContext.Provider value={value}>
        <div className="App">
          <Header clearItemsArray={this.clearItemsArray}/>
          <RenderError>
            <nav className="App_nav">{this.renderNavRoutes()}</nav>
          </RenderError>
          <header className="App_header">
            <h1>
              <Link to="/">Closet Catalogue</Link>
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