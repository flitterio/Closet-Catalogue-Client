import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './Header.css'



export default class Header extends Component {
  static defaultProps ={
    match: {
        params: {}
    }
}
  handleLogoutClick = () => {
      TokenService.clearAuthToken() 
      this.props.clearItemsArray()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in' >
        <Link
          onClick={this.handleLogoutClick}
          to='/' className="link">
          Logout
        </Link> |
        {this.props.renderNavRoutes()}
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register' className="link">
          Register&nbsp; 
        </Link> |
        <Link
          to='/sign-in' className="link">
           &nbsp;Log in 
        </Link> |
        {this.props.renderNavRoutes()}
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}  
      </nav>
    )
  }
}