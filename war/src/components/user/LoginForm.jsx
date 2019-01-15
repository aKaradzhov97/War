import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requester from '../../utils/requester';
import notificator from '../../utils/notificator';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
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

        //Validate here.

        if (this.state.username.length < 4) {
            notificator.showError('Username must be at least 4 symbols!');
            return;
        } else if (this.state.password.length < 5) {
            notificator.showError('Password must be at least 5 symbols!');
            return;
        }

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                sessionStorage.setItem('username', res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
                sessionStorage.setItem('userId', res._id);
                if (res._kmd.roles !== undefined) {
                    sessionStorage.setItem('roleId', res._kmd.roles[0].roleId);
                }
                notificator.showInfo('Successfully logged in!');

                this.props.history.push('/buildings/civil');

            }).catch((res) => {
            if (res.responseJSON.description === 'Invalid credentials. Please retry your request with correct credentials.') {
                notificator.showError('Invalid username and / or password! Please try again!');
            }

            this.setState({ username: '', password: '' });
        });
        //Notifications & validation remaining
        //Clear input fields.
        this.setState({
            username: '',
            password: ''
        })
    };

    isLogged = () => {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('authtoken')) {
            return true;
        }
        return false;
    };

    redirectTo = () => {
        this.props.history.push("/buildings/civil");
    };

    render = () => {
        const loginForm = (
            <section className="authenticate-section">
                <section className="authenticate">
                    <form onSubmit={this.handleSubmit} className="authenticate-form">
                        <div className="label">
                            <input type="text" onChange={this.handleChange} value={this.state.username} name="username" id="username" placeholder="Username" className="inputField"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="label">
                            <input type="password" onChange={this.handleChange} value={this.state.password} name="password" id="password" placeholder="Password" className="inputField"/>
                            <i className="fas fa-key"></i>
                        </div>
                        <div className="label">
                            <input type="submit" value="Login!"/>
                        </div>
                        <div className="label">
                            <Link to="/register">
                                <input type="button" value="Go to register!"/>
                            </Link>
                        </div>
                    </form>
                </section>
            </section>
        );

        return (
            <main>
                {!this.isLogged() ? loginForm : this.redirectTo()}
            </main>
        )
    }
}