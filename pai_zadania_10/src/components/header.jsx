import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { history } from './../utilities';

import userlogo from './userlogo.png';

class Header extends React.Component{
    handle_button_on_click(path){
        history.push(path);
    }

    create_unauthorized_view(){
        return(
            <div className="containerright">
                <input className="headerbutton" type="button" onClick={() => {this.handle_button_on_click("/login")}} value="Sign In" />
                <input className="headerbutton" type="button" onClick={() => {this.handle_button_on_click("/register")}} value="Sign Up" />
            </div>
        );
    }

    create_authorized_view(){
        return(
            <div className="containerright">
                <img src={userlogo} className="userlogo" />
                <div>
                    <p className="username">Imię Nazwisko</p>
                    <p className="userrole">Rola systemu</p>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div className='header'>
                <div className='containerleft'>
                    <Link to="/">MAIN PAGE</Link>
                </div>
                { this.props.data.is_authorized ? this.create_authorized_view() : this.create_unauthorized_view() }
            </div>
        );
    }
    
}

export default Header;