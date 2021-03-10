import React from "react";
import clsx from "clsx";

import "./Header.scss";
import Hamburger from "./Hamburger";
import Nav from "./Nav.js";
import menuicon from "../../../images/menuicon.svg";
import logo from "../../../images/logo.svg";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };

    this.openBurger = this.openBurger.bind(this);
    this.closeBurger = this.closeBurger.bind(this);
    this.tapBackground = this.tapBackground.bind(this);
    this.tapLink = this.tapLink.bind(this);

    this.menu = React.createRef();
  }

  componentDidMount() {
    this.menu.current.addEventListener("click", this.tapLink);
    window.addEventListener("click", this.tapBackground);
  }

  tapLink(e) {
    if (!e.target.closest("a")) {
      return false;
    }
    this.closeBurger();
  }

  tapBackground(e) {
    if (this.state.isActive) {
      if (!e.target.closest("header")) {
        this.closeBurger();
      }
    }
  }

  componentWillUnmount() {
    this.menu.current.removeEventListener("click", this.tapLink);
    window.removeEventListener("click", this.tapBackground);
  }

  closeBurger() {
    const body = document.querySelector("body");

    this.setState({ isActive: !this.state.isActive });
    if (body.className === "body_hidden") body.classList.toggle("body_hidden");
  }

  openBurger(event) {
    event.preventDefault();
    this.setState({
      isActive: !this.state.isActive,
    });

    const body = document.querySelector("body");
    let scroll = document.querySelector(".menu_scroll");
    body.classList.toggle("body_hidden");

    if (!this.state.isActive) {
      setTimeout(() => {
        scroll.scrollTop = 0;
      }, 0);
    }
  }

  render() {
    return (
      <header className='header container'>
        <div className='header__container'>
          <div className='logo'>
            <a href={"#home"}>
              <img src={logo} alt='logo' />
            </a>
          </div>

          <div className='header__menu-icon' onClick={this.openBurger}>
            <div>
              <img src={menuicon} alt='menu icon' />
            </div>
          </div>

          <div
            ref={this.menu}
            className={clsx(
              "hamburger-menu",
              this.state.isActive && "hamburger-menu_active"
            )}>
            <Hamburger />
          </div>

          <nav className='nav'>
            <Nav />
          </nav>
        </div>
      </header>
    );
  }
}
