import React, {Component} from 'react';

class SignIn extends Component {
    render(){
        return(
            <div className="signIn">
                <h1> Login </h1>
            <form id="login">
                <br /><br />
                <label htmlFor="username">
                    Username:
                </label>
                <input id="username"  name="username" type="text" placeholder="Username" required /> 
                <br /><br />
                <label htmlFor="pwd">
                    Password:
                </label>
                <input id="pwd" name="pwd" type="password" placeholder="Password" required />
                <br /><br />
                <input type="submit" />
                <br /><br />
            </form>
            </div>
        )
    }
}

export default SignIn;