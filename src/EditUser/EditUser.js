import React, { Component} from 'react';
import ApiContext from '../ApiContext';
import './EditUser.css';
import propTypes from 'prop-types';

class EditUser extends Component {
    //use example from editbookmark.js in bookmark app

    static propTypes = {
        match: propTypes.shape({
            params: propTypes.object,
        }),
        history: propTypes.shape({
            push: propTypes.func,
        }).isRequired
    };

    static contextType = ApiContext;

    state={
        error: null,
        id: '',
        fname:'',
        lname:'',
        username:'',
        email: '',
        password: '',
    };

   // componentDidMount() {
    //    const {userId} = this.props.match.params
        //GET request for user info
        // use this.setstate to set data in this state
   // }

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
  handleChangePassword = e => {
    this.setState({ password: e.target.value })
  };

    handleSubmit = () => {
        //PATCH api
    };
    
handleClickCancel = () => {
        this.props.history.push('/')
    };

    render() {
        const{error, fname, lname, username, email, password} = this.state
        const {onClickCancel} = this.props
        return(
            <section className='EditUser'>
            <h2>Edit User</h2>
            <form
              className='EditUser__form'
              onSubmit={this.handleSubmit}
            >
              <div className='EditUser__error' role='alert'>
                {error && <p>{error.message}</p>}
              </div>
              <div>
                <input
                  type='hidden'
                  name='id'
                  />
                <label htmlFor='fname'>
                 First Name
                  {' '}
                 
                </label>
                <input
                  type='text'
                  name='fname'
                  id='fname'
                  placeholder= 'New First Name'
  
                  value={fname}
                  onChange={this.handleChangeFname}
                />
              </div>
              <div>
                <label htmlFor='lname'>
                 Last Name
                  {' '}

                </label>
                <input
                  type='text'
                  name='lname'
                  id='lname'
                  placeholder='New Last Name'

                  value={lname}
                  onChange={this.handleChangeLname}
                />
              </div>
              <div>
                <label htmlFor='username'>
                  Username
                  {' '}
                </label>
                <input
                  name='username'
                  id='username'
                  placeholder='New Username'
                  value={username}
                  onChange={this.handleChangeUsername}
                />
              </div>
              <div>
                <label htmlFor='email'>
                  Email
                  {' '}
   
                </label>
                <input
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" 
                  name='email'
                  id='email'
                  placeholder='New Email'
                  value={email}
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div>
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
              </div>
              <div className='EditUser__buttons'>
                <button type='button' onClick={onClickCancel}>
                  Cancel
                </button>
                {' '}
                <button type='submit'>
                  Save
                </button>
              </div>
            </form>
          </section>

        )
    }

}

export default EditUser;