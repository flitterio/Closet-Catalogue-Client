import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import ApiContext from '../ApiContext'

export default class User extends React.Component {
    static defaultProps ={
        onDeleteUser: () => {},
    }
    static contextType = ApiContext;
    render(){
        const{id, fname, lname, username, email, password, } = this.props
        return(
            <div className='User'>
                <h1>Hello, {username}!</h1>
                <h2>Your Profile</h2>
                <h3>Name:</h3>
                    <p>{fname} {lname}</p>
                <h3>Email:</h3>
                    <p>{email}</p>
                <h3>Password:</h3>
                    <p>hidden</p>
            </div>
        )
    }
}