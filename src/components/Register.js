import React, { Component } from 'react';
import Header from './Header';

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

class Register extends Component {

    constructor() {
        super();
        this.state = {
            showErr: false
        }
    }
    
    componentDidMount() {
        document.body.style = 'background: var(--light)'
    }

    componentWillUnmount() {
        document.body.style = 'background: none'
    }

    checkPassword() {
        if (this.refs.pass1.value !== this.refs.pass2.value) {
            this.setState({ showErr: true })
            return 
        }

        this.setState({ showErr: false })
        return
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);  
        let stringData = stringifyFormData(data);

        console.log(stringData)
        fetch("https://www.bergenstem.com/api/users/register", {            
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: stringData
        })
        .then(response => response.json())
        .catch(e => console.error(e));
    }

    render() {
        return (
            <div>
                <Header title={"Register"}/>
                <div className="container">
                    {
                        this.state.showErr
                        ? <h1 className="err">Check your passwords immediately!</h1>
                        : null
                    }
                    <div className="form__container">                    
                        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="firstname">
                                First Name
                                </label>
                                <input className="form__item-input" type="text" id="firstName" name="firstname"/> 
                            </div>
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="lastname">
                                Last Name
                                </label>
                                <input className="form__item-input" type="text" id="lastName" name="lastname"/> 
                            </div>
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="username">
                                Email
                                </label>
                                <input className="form__item-input" type="email" id="email" name="email"/> 
                            </div>
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="username">
                                Username
                                </label>
                                <input className="form__item-input" type="text" id="username" name="username"/> 
                            </div>
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="password">
                                Password
                                </label>
                                <input className="form__item-input" ref="pass1"  type="password" name="password"/>                    
                            </div>      
                            <div className="form__item">
                                <label className="form__item-label" htmlFor="repassword">
                                Re-enter password
                                </label>
                                <input onChange={this.checkPassword.bind(this)} className="form__item-input" ref="pass2"  type="password"/>                    
                            </div>      
                            <button className="form__button">Register</button>         
                        </form>
                    </div>
                </div>
            </div>            
        );
    }
}

export default Register;