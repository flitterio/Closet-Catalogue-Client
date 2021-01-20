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
        {this.props.renderNavRoutes()} |
        <Link
          onClick={this.handleLogoutClick}
          to='/' className="link">
          &nbsp;Logout
        </Link> 
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
       {this.props.renderNavRoutes()} |
        <Link
          to='/register' className="link">
          &nbsp;Register&nbsp; 
        </Link> |
        <Link
          to='/sign-in' className="link">
           &nbsp;Log in 
        </Link> 
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