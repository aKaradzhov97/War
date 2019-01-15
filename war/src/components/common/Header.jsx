import React, {Component} from 'react';
//import { Link } from 'react-router-dom';

export default class Header extends Component {
    isAdmin = () => {
        if (sessionStorage.getItem('roleId') && sessionStorage.getItem('username') && sessionStorage.getItem('authtoken')) {
            return true;
        }
        return false;
    };

    isLogged = () => {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('authtoken')) {
            return true;
        }
        return false;
    };

    render = () => {
        return (
            <header>
                <p className="title">WAR</p>
                <p className="desc">Everything starts here...</p>
            </header>
        )
    }
}