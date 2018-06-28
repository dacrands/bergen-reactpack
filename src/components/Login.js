import React, { Component } from 'react';

import '../styles/login.css';

class Login extends Component {
    
    componentDidMount() {
        document.body.style = 'background: var(--light)'
    }

    componentWillUnmount() {
        document.body.style = 'background: none'
    }

    render() {
        return (
            <div className="container login--container">
                <div className="login">
                <div className="login__text">
                    <h1>Login</h1>
                </div>
                <div className="login__form">
                    <div className="login__input">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email"/> 
                    </div>
                    <div className="login__input">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password"/>                    
                    </div>                
                </div>
                </div>
            </div>
        );
    }
}

export default Login;