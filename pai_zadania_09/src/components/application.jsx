import React from "react";
import { Link, Outlet } from "react-router-dom";

class Application extends React.Component{
    constructor(props){
        super();

        this.state = {};
    }
    render(){
        return(
            <div>
                <div>
                    Application
                    <img src="https://http.cat/200" />
                </div>
                <div><Link to="/register">Register</Link></div>
                <div><Link to="/login">Login</Link></div>
                <Outlet />
            </div>
        );
    }
}

export default Application;