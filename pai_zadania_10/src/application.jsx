import './application.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Header from "./components/header";
import ProtectedRoute from "./components/protectedroute";

class Application extends React.Component{
    constructor(){
        super();

        this.state = {
            data: {
                update_data_callback: null,
                is_authorized: false,
                accounts: []
            }
        }
    }

    update_data = (new_data) => {
        const new_state = Object.assign({}, this.state);
        new_state.data = new_data;
        this.setState(new_state);
    }
    
    render(){
        return(
            <div>
                <Header data={this.state.data} />
                <div className="pagecontainer">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/protected">
                            <ProtectedRoute data={this.state.data} />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Application;