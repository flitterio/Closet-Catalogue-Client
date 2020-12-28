import React, {Component} from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
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
        console.log('redirecting...')
        const { location, history } = this.props
        const destination = (location.state || {})
        .from || '/my-closet'
        history.push(destination)
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
           console.log('logging in')
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
                <label htmlFor="username">
                    User name:
                </label>
                <Input 
                    id="username"  
                    name="username" 
                    type="text" placeholder="Username" required /> 
                <br /><br />
                <label htmlFor="password">
                    Password:
                </label>
                <Input 
                    id="password" 
                    name="password" 
                    type={this.state.passwordShown ? "text" : "password"} 
                    placeholder="Password" required />
                    <i onClick={this.togglePasswordVisiblity}>{eye}</i>{" "}
                <br /><br />
                <Button type="submit" >
                    Sign In 
                    </Button>
                <br /><br />
            </form>
            </div>
        )
    }
}

export default SignIn;