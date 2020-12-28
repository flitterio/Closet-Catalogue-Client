// import React, { Component} from 'react';
// import ApiContext from '../ApiContext';
// import './EditUser.css';
// import propTypes from 'prop-types';

// class EditUser extends Component {
//     //use example from editbookmark.js in bookmark app

//     static propTypes = {
//         match: propTypes.shape({
//             params: propTypes.object,
//         }),
//         history: propTypes.shape({
//             push: propTypes.func,
//         }).isRequired
//     };

//     static contextType = ApiContext;

//     state={
//         user: [],
//         error: null,
//         id: '',
//         fname:'',
//         lname:'',
//         username:'',
//         email: '',
//     };

//     componentDidMount() {
//       console.log(TokenService.getAuthToken())
//       fetch(`${config.API_ENDPOINT}/users`, {
//           method: 'GET',
//           headers: {
//               'content-type': 'application/json',
//               'Authorization': `Bearer ${TokenService.getAuthToken()}`
//           }
//       })
//       .then(res => {
//           if(!res.ok) {
//           return res.json().then(error => Promise.reject(error))
//           }
//           return res.json();
//       })
//        .then(responseJson => {
//           this.setState({user: responseJson }) 
//           console.log('this.state.user', this.state.user)
//        })


//   .catch(error => {
//       console.error(error)
//       this.setState({error})
//       })

//   }

//    handleChangeFname = e => {
//     this.setState({ fname: e.target.value})
//   };

//   handleChangeLname = e => {
//     this.setState({ lname: e.target.value })
//   };

//   handleChangeUsername = e => {
//     this.setState({ username: e.target.value })
//   };

//   handleChangeEmail = e => {
//     this.setState({ email: e.target.value })
//   };


//   handleSubmit = () => {
//       const {fname, lname, username,email} = e.target
        
//       const editUser = {
//         fname: fname.value,
//         lname: lname.value,
//         username: username.value,
//         email: email.value,

//       }

//       editUser.propTypes={
//           fname: PropTypes.string,
//           lname: PropTypes.string,
//           username: PropTypes.string,
//           email: PropTypes.string,
//       }

//       this.setState({ error: null })
//       fetch(`${config.API_ENDPOINT}/users`, {
//           method: 'PATCH',
//           headers:{
//               'content-type': 'application/json',
//               'Authorization': `Bearer ${TokenService.getAuthToken()}`
//           },
//           body: JSON.stringify(editUser),
//       })
//       .then(res => {
//           if (!res.ok) {
//             return res.json().then(error => Promise.reject(error))
//             }
//         })
//          .then(data => {
//             window.location.href='/my-profile'
//          })
        
//         .catch(error => {
//           console.error(error)
//           this.setState({ error })
//         })
//       };
    
// handleClickCancel = () => {
//         this.props.history.push('/')
//     };

//     render(){
//       const { user=[]} =this.state

//         return(
//             <section className='EditUser'>
//             <h2>Edit User</h2>
//             <form
//               className='EditUser__form'
//               onSubmit={this.handleSubmit}
//             >
//               <div className='EditUser__error' role='alert'>
//                 {error && <p>{error.message}</p>}
//               </div>
//               <div>
//                 <input
//                   type='hidden'
//                   name='id'
//                   />
//                 <label htmlFor='fname' >
//                  Edit First Name
//                   {' '}
                 
//                 </label>
//                 <input
//                   type='text'
//                   name='fname'
//                   id='fname'
//                   placeholder={user.fname}
  
//                   value={this.state.fname}
//                   onChange={this.handleChangeFname}
//                 />
//               </div>
//               <div>
//                 <label htmlFor='lname'>
//                  Edit Last Name
//                   {' '}

//                 </label>
//                 <input
//                   type='text'
//                   name='lname'
//                   id='lname'
//                   placeholder={user.lname}
//                   value={this.state.lname}
//                   onChange={this.handleChangeLname}
//                 />
//               </div>
//               <div>
//                 <label htmlFor='username'>
//                   Edit Username
//                   {' '}
//                 </label>
//                 <input
//                   name='username'
//                   id='username'
//                   placeholder={user.username}
//                   value={this.state.username}
//                   onChange={this.handleChangeUsername}
//                 />
//               </div>
//               <div>
//                 <label htmlFor='email'>
//                   Email
//                   {' '}
   
//                 </label>
//                 <input
//                   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" 
//                   name='email'
//                   id='email'
//                   placeholder={user.email}
//                   value={this.state.email}
//                   onChange={this.handleChangeEmail}
//                 />
//               </div>
//               {/* <div>
//                 <label htmlFor='pwd'>
//                   Password
//                   {' '}

//                 </label>
//                 <input 
//                     type="password" 
//                     id="pwd" 
//                     name="pwd" 
//                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" 
//                   value={password}
//                   onChange={this.handleChangePassword}
//                 />
//               </div> */}
//               <div className='EditUser__buttons'>
//                 <button type='button' onClick={onClickCancel}>
//                   Cancel
//                 </button>
//                 {' '}
//                 <button type='submit'>
//                   Save
//                 </button>
//               </div>
//             </form>
//           </section>

//         )
//     }

// }

// export default EditUser;