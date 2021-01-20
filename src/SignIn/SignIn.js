import React, {Component} from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import './SignIn.css';
import {Link} from 'react-router-dom';
import {Button, Input } from '../Utils/Utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;




class SignIn extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    state= {error: null,
    passwordShown: false }
    togglePasswordVisiblity = () =>{
        this.setState({passwordShown: !this.state.passwordShown })
    }

    handleSigninSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {})
        .from || '/my-closet'
        history.push(destination)
        window.location.reload()
      }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const {username, password } = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = ''
        password.value =''
        this.handleSigninSuccess()
    }

    handleSubmitJwtAuth = ev => {
           ev.preventDefault()
           this.setState({ error: null })
           const { username, password } = ev.target
        
           AuthApiService.postSignin({
             username: username.value,
             password: password.value,
           })
             .then(res => {
               username.value = ''
               password.value = ''
               TokenService.saveAuthToken(res.authToken)
               this.handleSigninSuccess()
             })
             .catch(res => {
               this.setState({ error: res.error })
             })
         }

    render(){
        const {error } = this.state
        return(
            <div className="signIn">
                <h1> Login </h1>
            <form id="login"
               onSubmit={this.handleSubmitJwtAuth}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                <br /><br />
        <div className="container">
            <div className='col-25'>
                <label htmlFor="username">
                    User name:
                </label>
            </div>
            <div className="col-75">
                <Input 
                    id="username"  
                    name="username" 
                    type="text" placeholder="Username" required />
                </div>
           
            <br /><br />
            <div className="pass">
            <div className="col-25">
                <label htmlFor="password">
                    Password:
                </label>
            </div>
            <div className="col-70">
                <Input 
                    id="password" 
                    name="password" 
                    type={this.state.passwordShown ? "text" : "password"} 
                    placeholder="Password" required />
            </div>
            <div>
                    <i onClick={this.togglePasswordVisiblity}>{eye}</i>{" "}
                <br /><br />
                <div className="submit">
                <Button id="buttonstyle" className="submit" type="submit" >
                    Sign In 
                    </Button>
                <br /><br />
                </div>
                </div>
            </div>
            </div>
            </form>
        <div className="redirect"> 
            <h3>not a member yet?&nbsp; 
                <Link to='/register'>
                     Click Here
                </Link>
                &nbsp;to register! 
            </h3>
        </div>
 </div>
        )
    }
}

export default SignIn;