import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import RenderError from './RenderError';
import {ApiContext }from './ApiContext';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import MyCloset from './MyCloset/MyCloset';
import MyProfile from './MyProfile/MyProfile';
import NewItem from './NewItem/NewItem';
import MyItem from './MyItem/MyItem';
import EditUser from './EditUser/EditUser';

class App extends Component {
  // state = {
  //   items: [
  //     {
  //       id: 1,
  //       userId: 1,
  //       title: 'Maroon Shirt',
  //       image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607381580/maroon-shirt_knqzwj.jpg',
  //       season: 'fall',
  //       size: 'medium',
  //       category: 'tops, t-shirts',
  //       favorite: true,
  //     },
  //     {
  //       id: 2,
  //       userId: 1,
  //       title: 'Boyfriend Jeans',
  //       image: './images/boyfriend-jeans.jpg',
  //       season: 'fall, spring',
  //       size: '8',
  //       category: 'pants, jeans',
  //       favorite: true,
  //     },
  //     {
  //       id: 3,
  //       userId: 1,
  //       title: 'Gray Beanie',
  //       image: ' ',
  //       season: 'winter',
  //       size: ' ',
  //       category: 'accessories, hats',
  //       favorite: false,
  //     },
  //   ],

  //   users: [
  //     {
  //       id: 1,
  //       fname: 'Example',
  //       lname: 'User',
  //       email: "exampleuser@example.com",
  //       username: "exampleuser",
  //       password: 'password'
  //   },

  //     {
  //       id: 123,
  //       fname: 'Francesca',
  //       lname: 'Litterio',
  //       email: 'francesca@litterio.net',
  //       username: 'flitterio',
  //       password: 'Abc123!',

  //     },
  //   ]
  // };

  componentDidMount(){
    //GET request to /items/userId
    // localhost/items/userID => data
    //set context with array of items for user id=1

  }

  renderNavRoutes(){
    return(
      <>
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign Up </Link>
      <Link to="/sign-in">Sign In </Link>
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
    <Route path="/sign-up" component={SignUp} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/my-closet" component={MyCloset} />
    <Route path="/my-profile" component={MyProfile}/>
    <Route path="/new-item" component={NewItem}/>
    <Route path="/item/:itemId" component={MyItem}/>
    <Route path="/edit-user/:userId" component={EditUser} />
    </>
    );
  }

  render(){
    // const value = {
    //   items: this.state.items,
    //   users: this.state.users,
    //   deleteItem: this.handleDeleteItem,
    //   deleteUser: this.handleDeleteUser
    // };
    return(
    
        <div className="App">
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

    );
  }
}

export default App;