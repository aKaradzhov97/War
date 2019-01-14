import React, { Component } from 'react';
import requester from '../../utils/requester';
import notificator from '../../utils/notificator';

export default class LoginForm extends Component {

    render = () => {
        return (
            <main>
                <section id="viewLogin" className="viewLogin">
                    <h2 className="titleForm">Login</h2>
                    <form onSubmit={this.handleSubmit} id="formLogin" className="form">
                        <div>Username:</div>
                        <div><input type="text" onChange={this.handleChange} value={this.state.username} name="username" required /></div>
                        <div>Password:</div>
                        <div><input type="password" onChange={this.handleChange} value={this.state.password} name="password" required /></div>
                        <div><input type="submit" id="buttonLoginUser" value="Login!" /></div>
                    </form>
                </section>
            </main>
        )
    }
}