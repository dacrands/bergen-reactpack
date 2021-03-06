import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/color-logo.svg';

import '../styles/menu.css';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      logoWidth: 60,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.setState({
      logoWidth: this.refs.logo.clientWidth,
    });

    window.addEventListener('resize', () => {
      this.refs.dropdownMenu.style = "";
    })
  }

  setPadding() {
    if (global.window.innerWidth <= 768) {
      return 0;
    }
    return this.state.logoWidth;
  }

  toggleMenu() {
    if (window.innerWidth <= 768) {
      const pattyList = this.refs.patties.childNodes;
      const pattyListBool = pattyList[0].classList.contains('patty--collapse-1');

      const orderPatties = (arr, bool) => {
        if (bool) {
          var numOne = 1; var numTwo = 2;
        } else { var numOne = 2; var numTwo = 1; }

        arr.forEach((patty) => {
          setTimeout(() => {
            patty.classList.toggle(`patty--collapse-${numOne}`);
          }, 150);
          patty.classList.toggle(`patty--collapse-${numTwo}`);
        });
      };
      this.setState({ mobileMenu: !pattyListBool });
      orderPatties(pattyList, pattyListBool);
    }
  }

  toggleDropdown() {
    const dropdownButton = this.refs.dropdownButton;
    const dropdownMenu = this.refs.dropdownMenu;
    dropdownButton.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        if (dropdownMenu.style.display === 'none') {
          dropdownMenu.style.display = 'block';
          dropdownMenu.style.visibility = 'visible';
          dropdownMenu.style.opacity = '1';
        } else {
          dropdownMenu.style.display = 'none';
          dropdownMenu.style.visibility = 'hidden';
          dropdownMenu.style.opacity = '0';
        }
      }
    })
  }

  render() {
    return (
      <nav className={this.props.isLanding ? 'menu' : 'menu'} ref="menu" role="navigation" aria-label="main navigation">
        <div className="menu__logo" ref="logo">
          <NavLink
            exact
            to="/"
            className="menu__logo-link"
            activeClassName='menu__link--active'
            aria-label="home button"
          >
            <Logo />
          </NavLink>
        </div>
        <ul
          className={this.state.mobileMenu ? 'menu__list menu__list--show' : 'menu__list'}
          style={{ paddingRight: `${this.setPadding.bind(this)}px` }}
        >
          <li className="menu__list-item">
            <NavLink
              onClick={this.toggleMenu}
              exact
              to="/about"
              className="menu__link"
              activeClassName='menu__link--active'
            >
              About
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              onClick={this.toggleMenu}
              to="/3sp"
              className="menu__link"
              activeClassName='menu__link--active'
            >
              3SP
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              onClick={this.toggleMenu}
              to="/projects"
              className="menu__link"
              activeClassName='menu__link--active'
            >
              Projects
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              onClick={this.toggleMenu}
              to="/contact"
              className="menu__link"
              activeClassName='menu__link--active'
            >
              Contact
            </NavLink>
          </li>
          <li className="menu__list-item" id="dropdown">
            <button
              ref="dropdownButton"
              className="menu__button menu__link"
              id="dropdownButton"
              onClick={this.toggleDropdown}
            >
              Resources&#x25BE;
            </button>
            <ul ref="dropdownMenu" className="menu__dropdown shadow">
              <li className="menu__dropdown-item">
                <Link
                  onClick={this.toggleMenu}
                  className="menu__dropdown-link"
                  to="/calendar"
                >
                  Calendar
                          </Link>
              </li>
              <li className="menu__dropdown-item">
                <a
                  className="menu__dropdown-link"
                  href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/"
                  target="_blank"
                >
                  Running Start Program
                          </a>
              </li>
              <li className="menu__dropdown-item">
                <a
                  className="menu__dropdown-link"
                  href="http://bergen.edu/stemsummit"
                  target="_blank"
                >
                  STEM Summit
                          </a>
              </li>
              <hr className="hr" />
              <li className="menu__dropdown-item">
                <Link
                  onClick={this.toggleMenu}
                  className="menu__dropdown-link"
                  to="/login"
                >
                  Login
                          </Link>
              </li>
              <li className="menu__dropdown-item">
                <Link
                  onClick={this.toggleMenu}
                  className="menu__dropdown-link"
                  to="/register"
                >
                  Register
                          </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="menu__burger">
          <button
            className="menu__button"
            aria-label="menu button"
            onClick={this.toggleMenu}>
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
