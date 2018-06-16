import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../images/color-logo.svg';

import '../styles/menu.css';



class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
            menuHeight: 50,
            logoWidth: 60
        }

        console.log(this.props.history)
    }

    componentDidMount() {
        this.setState({ 
            menuHeight: this.refs.menu.clientHeight,
            logoWidth: this.refs.logo.clientWidth
        });

        if (window.innerWidth <= 768) {
            this.refs.menu.classList.remove('menu__landing');
        }
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.refs.menu.classList.remove('menu__landing');
                this.setState({ menuHeight: this.refs.menu.clientHeight });
            };
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 1) {
                return this.refs.menu.classList.remove('menu__landing');
            }            
            return this.refs.menu.classList.add('menu__landing');
        });
    }

    toggleMenu() {
        const pattyList = this.refs.patties.childNodes;
        const pattyListBool = pattyList[0].classList.contains('patty--collapse-1');

        const orderPatties = (arr, bool) => {
            if (bool) {
                var numOne = 1; var numTwo = 2;
            } else { var numOne = 2; var numTwo = 1; };

            arr.forEach((patty) => {
                setTimeout(() => {
                    patty.classList.toggle(`patty--collapse-${numOne}`);
                }, 150);
                patty.classList.toggle(`patty--collapse-${numTwo}`);
            });
        }

        this.setState({ mobileMenu: !pattyListBool });
        orderPatties(pattyList, pattyListBool);
    }

    render() {
        return (
            <nav className="menu menu__landing" ref="menu">
                <div className="menu__logo" ref="logo">
                    <NavLink
                        exact
                        to="/"                        
                        className="menu__link"
                        activeClassName='menu__link--active'
                    >
                        &#10092;STEM&#10093;
                        {/* &infin;	 */}
                        {/* <Logo width={60} height={40} /> */}

                        
                    </NavLink>
                </div>
                <ul
                    className={this.state.mobileMenu ? "menu__list menu__list--show" : "menu__list"}
                    style={{ top: `${this.state.menuHeight}px`, paddingRight: `${this.state.logoWidth}px` }}
                >
                    <li className="menu__list-item">
                        <NavLink
                            exact
                            to="/benefits"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink
                            to="/3sp"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            3SP
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink
                            to="/calendar"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            Events
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink
                            to="/contact"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            Contact
                        </NavLink>
                    </li>                    
                    <li className="menu__list-item" id="dropdown">
                        <button
                            className="menu__list-link menu__button"
                            id="dropdownButton"                            
                        >
                            Resources&#x25BE;
                        </button>
                        <ul className="menu__dropdown">
                            <li className="menu__dropdown-item">
                                <Link
                                    className="menu__dropdown-link"
                                    to="/3sp"

                                >
                                    STEM Student Scholars
                                </Link>
                                {/* <a className="menu__dropdown-link" href="">Other stuff</a> */}
                            </li>
                            {/* <li className="menu__dropdown-item">
                                <Link
                                    className="menu__list-link"
                                    to="/calendar"

                                >
                                    Calendar
                                </Link>                     
                            </li> */}
                            <li className="menu__dropdown-item">
                                <a
                                    className="menu__dropdown-link"
                                    href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/"
                                >
                                    Running Start Program
                                </a>
                            </li>
                            <li className="menu__dropdown-item">
                                <a
                                    className="menu__dropdown-link"
                                    href="http://bergen.edu/stemsummit"
                                >
                                    STEM Summit
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="menu__burger">
                    <button
                        className="menu__button"
                        aria-label="menu button"
                        onClick={this.toggleMenu.bind(this)}>
                        <div ref="patties" className="patties">
                            <div className="patty"></div>
                            <div className="patty"></div>
                        </div>
                    </button>
                </div>
            </nav>
        );
    }
}

export default Menu;
