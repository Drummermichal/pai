import './register.css';
import React from "react";

import { history } from '../utilities';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: props.data
        };

        this.signUp = this.signUp.bind(this);
    }
    
    render(){
        return(
            <div className="Register">
                <label className="register-label">Username: </label>
                <input type="text" id="username" /><br/><br/>
                <label className="login-label">Password: </label>
                <input type="password" id="password" /><br/><br/>
                <input type="button" onClick={this.signUp} value="Sign Up" />
            </div>
        );
    }

    signUp(){
        const new_state = Object.assign({}, this.state);
        new_state.data.accounts.push({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        });
        new_state.data.is_authorized = true;
        this.setState(new_state);
        this.state.data.update_data_callback(new_state);
        history.push("/dashboard");
    }
}

export default Register;