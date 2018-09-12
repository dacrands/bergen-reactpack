import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {

    render() {

        if (this.props.image) {
            return (
                <div className="header--bg">
                    <div className="header--overlay">
                        <div className="container">
                            <h1 className="header__title">{this.props.title}</h1>
                        </div>
                    </div>
                    <header
                        style={{ backgroundImage: `url(${this.props.image})` }}
                        className={"header--img"}>
                    </header>
                </div>
            )
        }

        return (
            // <header className={this.props.title ? "header" : "header--hide"}>
            <header className={"header"}>
                <h1 className="header__title">{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;
