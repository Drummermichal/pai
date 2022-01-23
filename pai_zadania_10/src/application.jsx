import './application.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Header from "./components/header";
import ProtectedRoute from "./components/protectedroute";
import Navigation from './components/navigation';

class Application extends React.Component{
    constructor(){
        super();

        this.state = {
            data: {
                update_data_callback: this.update_data,
                is_authorized: false,
                accounts: [
                    {
                        username: "piqulsky",
                        password: "pikulski"
                    }
                ]
            }
        }
    }

    update_data = (new_data) => {
        let new_state = Object.assign({}, this.state);
        new_state = new_data;
        this.setState(new_state);
        console.log(this.state)
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
                            <Login data={this.state.data} />
                        </Route>
                        <Route exact path="/register">
                            <Register data={this.state.data} />
                        </Route>
                        <ProtectedRoute data={this.state.data} path={["/dashboard", "/calculator", "/chat"]}>
                            <Navigation data={this.state.data} />
                        </ProtectedRoute>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Application;