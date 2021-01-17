import React, {Component} from 'react';
import TokenService from '../services/token-service';
import config from '../config';


class DeleteUser extends Component {
    static defaultProps ={
        onDeleteUser: () => {},
         match: {
        params: {}
    }
    }

    handleDeleteUser = e => {
        e.preventDefault()
        const {userId} = this.props.user.id 
       
     fetch(`${config.API_ENDPOINT}/users/${userId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
          })
          .then( res => {
            if(!res.ok) 
              return res.json().then(e =>  Promise.reject(e))
                return res
          })
          .then(() => {
            this.props.onDeleteUser(userId)
            TokenService.clearAuthToken()
            window.location.href='/'
            })
          .catch(error => {
            console.error({error})
          })
          }


    cancelDelete = (e) => {
        window.location.href='/my-profile'
    }

    render(){
        return(
            <>
            <h2>Are you sure you want to delete your Profile?</h2>
            <p>Deleting your account is irreversible </p>
            <div className='group'>
                <input type='button'  id='delete' value='DELETE USER' onClick={this.handleDeleteUser}/>
                <input type='button'  id='clear' value='CANCEL' onClick={this.cancelDelete} />
            </div> 
            </>

        )
    }
}

export default DeleteUser;