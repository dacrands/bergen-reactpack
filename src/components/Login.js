import React, { Component } from 'react';

import '../styles/login.css';

class Login extends Component {
    
    componentDidMount() {
        document.body.style = 'background: var(--light)'
    }

    componentWillUnmount() {
        document.body.style = 'background: none'
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/users/login', {
            method: 'POST',
            body: data
        })
    }

    render() {
        return (
            <div className="container login--container">
                <div className="login">
                <div className="login__text">
                    <h1>Login</h1>
                </div>
                <form className="login__form" onSubmit={this.handleSubmit.bind(this)}>
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
                    <input type="submit" formAction/>          
                </form>
                </div>
            </div>
        );
    }
}

export default Login;