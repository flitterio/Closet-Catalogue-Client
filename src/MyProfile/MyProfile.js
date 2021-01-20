import React, {Component} from 'react';
import ApiContext from '../ApiContext';
import './MyProfile.css';
import User from '../User/User';
//import {getUser} from '../user-helpers';
import EditUser from '../EditUser/EditUser'
import EditUserButton from '../EditUserButton/EditUserButton';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import config from '../config';


class MyProfile extends Component {
    state={
        error: null,
        user:[],
    }
    static defaultProps ={
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/users`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if(!res.ok) {
            return res.json().then(error => Promise.reject(error))
            }
            return res.json();
        })
         .then(responseJson => {
            this.setState({user: responseJson }) 
         })
    

    .catch(error => {
        console.error(error)
        this.setState({error})
        })

    }
    render(){
        const { user=[]} = this.state

        return(
        <article id="my-profile">
            <div className='profile-group'>
                <User 
                    id={user.id}
                    fname={user.fname}
                    lname={user.lname}
                    email= {user.email}
                    username = {user.username}
                    password = {user.password}
                        />

                <EditUserButton
                    tag ={Link}
                    to={`/edit-user`}
                    id="buttonstyle"
                    type='button'
                    className='EditUser_button-container'>
                        EDIT PROFILE
                </EditUserButton>
            </div>
        </article>
        )
    }
}

export default MyProfile;