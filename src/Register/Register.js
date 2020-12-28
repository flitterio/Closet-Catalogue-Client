import React, {Component, useState} from 'react';
import {Input, Button} from '../Utils/Utils';
import AuthApiService from '../services/auth-api-service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


class Register extends Component {
    
    state = {
        error:null,
        passwordShown: false
     }
    
togglePasswordVisiblity = () =>{
    this.setState({passwordShown: !this.state.passwordShown })
}
onRegistrationSuccess = () => {
    window.location.href='/sign-in'
}
    handleSubmit = ev => {
        ev.preventDefault()
 
        const { fname, lname, username, password, email } = ev.target
    
        this.setState({ error: null })
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
            fname: fname.value,
            lname: lname.value,
            email: email.value,
        })
    

        .then(user => {
            fname.value = ''
            lname.value = ''
            username.value = ''
            password.value = ''
            email.vaulue = ''
            this.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })

        
      }
    

    render(){
        const { error } = this.state
        return(
        <div className="register"> 
                <h1>
                    New User
                </h1>

            <section>
                <form id="register"
                onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                        </div>
                    <label htmlFor="fname">
                        First Name 
                    </label>
                    <Input 
                        id="fname" 
                        name="fname" 
                        type="text" placeholder="First Name" required />
                <br /><br />
                    <label htmlFor="lname">
                        Last Name 
                    </label>
                    <Input 
                        id="lname" 
                        name="lname" 
                        type="text" placeholder="Last Name" required/>
                <br /><br />
                    <label htmlFor="email">
                        Email 
                    </label>
                    <Input 
                        id="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                <br /><br />
                    <label htmlFor="username">
                        Username 
                    </label>
                    <Input 
                        id="username"  name="username" type="text" placeholder="Username" required/> 
                <br /><br />
                    <label htmlFor="password">
                        Password 
                    </label>
                    <Input 
                        type={this.state.passwordShown ? "text" : "password"} 
                        id="password" name="password" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" required />
                    <i onClick={this.togglePasswordVisiblity}>{eye}</i>{" "}

                <br /><br />
                {/* <label htmlFor="repassword">
                        Re-Enter Password 
                    </label>
                    <Input 
                        type="password" id="repassword" name="repassword" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Re-Enter Password" 
                        required />
                <br /><br /> */}
                    <Button type="submit">
                        Register
                        </Button>
                </form>
            </section> 
        </div>
        )
    }
}

export default Register;