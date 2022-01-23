import './login.css';
import React from "react";

import { history } from '../utilities';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: props.data
        };

        this.signIn = this.signIn.bind(this);
    }
    
    render(){
        return(
            <div className="Login">
                <label className="login-label">Username: </label>
                <input type="text" id="username" /><br/><br/>
                <label className="login-label">Password: </label>
                <input type="password" id="password" /><br/><br/>
                <input type="button" value="Sign In" onClick={this.signIn} />
            </div>
        );
    }

    signIn(){
        this.state.data.accounts.forEach(element => {
            if(document.getElementById("username").value == element.username
            && document.getElementById("password").value == element.password){
                const new_state = Object.assign({}, this.state);
                new_state.data.is_authorized = true;
                this.setState(new_state);
                this.state.data.update_data_callback(new_state);
                history.push("/dashboard");
            }
        });
    }
}

export default Login;