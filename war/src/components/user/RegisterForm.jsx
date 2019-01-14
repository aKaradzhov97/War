import React, { Component } from 'react';
import requester from "../../utils/requester";
import notificator from "../../utils/notificator";
import { Link } from 'react-router-dom';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            email: ''
        }
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({
            [fieldName]: fieldValue
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //Validation:
        if (!(/^[A-Za-z0-9]{4,}$/.test(this.state.username))) {
            notificator.showError('Username must be at least 4 characters long and contain symbols [a-z][A-Z][0-9]!');
            return;
        } else if (!(/^[A-Za-z\d]{5,}$/.test(this.state.password))) {
            notificator.showError('Password must be at least 5 characters long and contain symbols [a-z][A-Z][0-9]!');
            return
        } else if (this.state.repeatPassword !== this.state.password) {
            notificator.showError('Passwords mismatch!');
            return;
        } else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)) {
            notificator.showError('Please provide valid Email address!');
            return;
        }
        //End of validation!
        
        let data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };

        requester.post('user', '', 'basic', data)
            .then((res) => {
                notificator.showInfo('Successfully registered! Welcome to War!');

                sessionStorage.setItem('username', res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
                sessionStorage.setItem('userId', res._id);
                this.props.history.push('/');

            }).catch((res) => {
                notificator.handleError(res);

                this.setState({ username: '', password: '', repeatPassword: '', email: '' });
            });
    };

    render = () => {
        return (
            <main>
                <section className="authenticate-section">
                    <section className="authenticate">
                        <form onSubmit={this.handleSubmit} className="authenticate-form">
                            <div className="label">
                                <input type="text" onChange={this.handleChange} value={this.state.username} name="username" id="username" placeholder="Username" className="inputField"/>
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="label">
                                <input type="email" onChange={this.handleChange} value={this.state.email} name="email" id="email" placeholder="Email" className="inputField"/>
                                    <i className="fas fa-envelope"></i>
                            </div>
                            <div className="label">
                                <input type="password" onChange={this.handleChange} value={this.state.password} name="password" id="password" placeholder="Password" className="inputField"/>
                                    <i className="fas fa-key"></i>
                            </div>
                            <div className="label">
                                <input type="password" onChange={this.handleChange} value={this.state.repeatPassword} name="repeatPassword" id="repeatPassword" placeholder="Repeat password" className="inputField"/>
                                    <i className="fas fa-key"></i>
                            </div>
                            <div className="label">
                                <input type="submit" value="Register!"/>
                            </div>
                            <div className="label">
                                <Link to="/">
                                    <input type="button" value="Go to login!"/>
                                </Link>
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        )
    }
}