import React, {Component} from 'react';
import ApiContext from '../ApiContext';
import './MyProfile.css';
import User from '../User/User';
import {getUser} from '../user-helpers';
import EditUser from '../EditUser/EditUser'
import EditUserButton from '../EditUserButton/EditUserButton';
import { Link } from 'react-router-dom';


class MyProfile extends Component {
    static defaultProps ={
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    render(){
        const userId = 1
        const {users=[]} = this.context
        const userInfo = getUser(users, userId)
        
        return(
        <article id="my profile">

            <div className='group'>
                {userInfo.map(user =>
                        <User 
                            id={user.id}
                            fname={user.fname}
                            lname={user.lname}
                            email= {user.email}
                            username = {user.username}
                            password = {user.password}
                                />
                         )}
                <EditUserButton
                    tag ={Link}
                    to={`/edit-user/${userId}`}
                    type='button'
                    className='EditUser_button-container'>
                        Edit Profile
                </EditUserButton>
            </div>
        </article>
        )
    }
}

export default MyProfile;