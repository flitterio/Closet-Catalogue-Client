import React, {Component} from 'react';
import TokenService from '../services/token-service';
import {Button, Input } from '../Utils/Utils';

class SignIn extends Component {
    static defaultProps= {
        onSigninSuccess: () => {}
    }

    state= {error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const {username, password } = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = ''
        password.value =''
        this.props.onSigninSuccess()
    }

    render(){
        const {error } = this.state
        return(
            <div className="signIn">
                <h1> Login </h1>
            <form id="login"
                onSubmit={this.handleSubmitBasicAuth}>
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
                    type="password" placeholder="Password" required />
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