import React from "react";
import clsx from "clsx";
import './header.scss';
import logo from '../../images/logo.svg';
import Nav from './nav.js';
import Menu from "./hamburger";
import menuicon from "../../images/menuicon.svg";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    render() {
        return (
            <header className="header container">
                <div className="header__container">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>

                    <div className='header__menu-icon' onClick={() => this.setState({
                        isActive: !this.state.isActive,
                    })}>
                        <a href="#" >
                            <img src={menuicon} alt="menu icon"/>
                        </a>
                    </div>

                    <div className={clsx("hamburger-menu",
                        this.state.isActive && 'hamburger-menu_active')}>
                        <div className="menu__content">
                            <Menu/>
                        </div>
                    </div>

                    <nav className="nav">
                        <Nav/>
                    </nav>

                </div>
            </header>
        );
    }
}

export default Header;
