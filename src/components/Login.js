import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { stringify } from 'querystring';

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

class Login extends Component {

  componentDidMount() {
    document.body.classList.add('content--pattern');
  };

  componentWillUnmount() {
    document.body.classList.remove('content--pattern');
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let stringData = stringifyFormData(data);

    fetch('/api/users/login', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: stringData
    })
      .then(response => response.json())
      .then(user => {
        window.userData = user.userData;
        this.props.history.push("/")
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="container form--height">
        <div className="form__container form--dark">
          <div className="text--center">
            <h1>Login</h1>
          </div>
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form__item">
              <label className="form__item-label" htmlFor="username">
                Username
                        </label>
              <input required className="form__item-input" type="text" id="username" name="username" />
            </div>
            <div className="form__item">
              <label className="form__item-label" htmlFor="password">
                Password
                        </label>
              <input required className="form__item-input" type="password" name="password" />
            </div>
            <button className="form__button form__button--dark">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
