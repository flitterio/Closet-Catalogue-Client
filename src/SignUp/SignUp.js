import React, {Component} from 'react';

class SignUp extends Component {
    render(){
        return(
        <div className="sign up"> 
                <h1>
                    New User
                </h1>

            <section>
                <form id="signUp">
                    <label htmlFor="first-name">
                        First Name 
                    </label>
                    <input id="first-name" name="first-name" type="text" placeholder="First Name" required />
                <br /><br />
                    <label htmlFor="last-name">
                        Last Name 
                    </label>
                    <input id="last-name" name="last-name" type="text" placeholder="Last Name" required/>
                <br /><br />
                    <label htmlFor="email">
                        Email 
                    </label>
                    <input id="email" placeholder="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
                <br /><br />
                    <label htmlFor="username">
                        Username 
                    </label>
                    <input id="username"  name="username" type="text" placeholder="Username" required/> 
                <br /><br />
                    <label htmlFor="pwd">
                        Password 
                    </label>
                    <input type="password" id="pwd" name="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" required />
                <br /><br />
                <label htmlFor="repwd">
                        Re-Enter Password 
                    </label>
                    <input type="password" id="repwd" name="repwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Re-Enter Password" required />
                <br /><br />
                    <input type="submit"/>
                </form>
            </section> 
        </div>
        )
    }
}

export default SignUp;