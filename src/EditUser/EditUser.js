import React, { Component} from 'react';
import ApiContext from '../ApiContext';
import './EditUser.css';
import PropTypes from 'prop-types';
import TokenService from '../services/token-service';
import config from '../config';
import {Link} from 'react-router-dom';
import DeleteUser from '../DeleteUser/DeleteUser'


class EditUser extends Component {
    //use example from editbookmark.js in bookmark app

    static contextType = ApiContext;

    state={
        user: [],
        error: null,
        id: '',
        fname:'',
        lname:'',
        username:'',
        email: '',
        password:'',
        deleteWarning: false
    };

    componentDidMount() {
      console.log(TokenService.getAuthToken())
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
          this.setState({
              user: responseJson 
            }) 
          console.log('this.state.user', this.state.user)
          this.setState({
            id: this.state.user.id,
            fname: this.state.user.fname,
            lname: this.state.user.lname,
            username: this.state.user.username,
            email: this.state.user.email,
            password: this.state.user.password
       })
       console.log(this.state.username)
    })


        .catch(error => {
            console.error(error)
            this.setState({error})
            })

  }

  deleteWarning = (e) => {
      const current = this.state.deleteWarning;
      const newVal = !current;
    this.setState({deleteWarning: newVal});
  }

   handleChangeFname = e => {
    this.setState({ fname: e.target.value})
  };

  handleChangeLname = e => {
    this.setState({ lname: e.target.value })
  };

  handleChangeUsername = e => {
    this.setState({ username: e.target.value })
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value })
  };


  handleSubmit = (e) => {
      e.preventDefault();
      const {fname, lname, username, email} = e.target
        
      const editUser = {
        fname: fname.value,
        lname: lname.value,
        username: username.value,
        email: email.value,

      }

      editUser.propTypes={
          fname: PropTypes.string,
          lname: PropTypes.string,
          username: PropTypes.string,
          email: PropTypes.string,
      }

      this.setState({ error: null })
      fetch(`${config.API_ENDPOINT}/users/${this.state.user.id}`, {
          method: 'PATCH',
          headers:{
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`
          },
          body: JSON.stringify(editUser),
      })
      .then(res => {
          if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
            }
        })
         .then(data => {
            window.location.href='/my-profile'
         })
        
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
      };
    
handleClickCancel = () => {
        this.props.history.push('/')
    };

    render(){
      const { user=[]} =this.state

        return(
            <section className='EditUser'>
            <h2>Edit User</h2>
            <form
              className='EditUser__form'
              onSubmit={this.handleSubmit}
            >
              {/* <div className='EditUser__error' role='alert'>
                {error && <p>{error.message}</p>}
              </div> */}
              <div>
                <input
                  type='hidden'
                  name='id'
                  />
                <label htmlFor='fname' >
                 Edit First Name
                  {' '}
                 
                </label>
                <input
                  type='text'
                  name='fname'
                  id='fname'
                  placeholder={user.fname}
                  defaultValue={user.fname}
                  onChange={this.handleChangeFname}
                />
              </div>
              <div>
                <label htmlFor='lname'>
                 Edit Last Name
                  {' '}

                </label>
                <input
                  type='text'
                  name='lname'
                  id='lname'
                  placeholder={user.lname}
                  defaultValue={user.lname}
                  onChange={this.handleChangeLname}
                />
              </div>
              <div>
                <label htmlFor='username'>
                  Edit Username
                  {' '}
                </label>
                <input
                  name='username'
                  id='username'
                  placeholder={user.username}
                  defaultValue={user.username}
                  onChange={this.handleChangeUsername}
                />
              </div>
              <div>
                <label htmlFor='email'>
                  Email
                  {' '}
   
                </label>
                <input
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                  name='email'
                  id='email'
                  placeholder={user.email}
                  defaultValue={user.email}
                  onChange={this.handleChangeEmail}
                />
              </div>
              {/* <div>
                <label htmlFor='pwd'>
                  Password
                  {' '}

                </label>
                <input 
                    type="password" 
                    id="pwd" 
                    name="pwd" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" 
                  value={password}
                  onChange={this.handleChangePassword}
                />
              </div> */}
              <div className='EditUser__buttons'>
                <Link to={`/my-profile`}>
                    Cancel
                </Link>
                <button type='submit'>
                  Save
                </button>
              </div>
              <br /> <br />
                     
            <section className="DeleteUser" >
                <input type='button' value='Delete User' onClick={this.deleteWarning} style={{visibility: !this.state.deleteWarning ? 'visible' : 'hidden'}}/> 
                  
                  {this.state.deleteWarning ? <DeleteUser user={this.state.user} /> : null}

              </section>
            </form>
          </section>

        )
    }

}

export default EditUser;