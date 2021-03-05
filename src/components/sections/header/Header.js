import React from "react";
import clsx from "clsx";
import './header.scss';
import logo from '../../../images/logo.svg';
import Nav from './Nav.js';
import Hamburger from "./Hamburger";
import menuicon from "../../../images/menuicon.svg"
// import 'react-sticky-header/styles.css';
// import StickyHeader from 'react-sticky-header';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }

        this.openBurger = this.openBurger.bind(this);
        this.closeBurger = this.closeBurger.bind(this);
    }

    componentDidMount() {//я уверен, что этот код нужно писать не здесь,АРТЕМ ПОМОГИИ ОБЪЯСНИ
        const menu = document.querySelector('.hamburger-menu');

        menu.addEventListener('click', (e) => {
            const target = e.target;

            if (!target.closest('a')) {
                return false;
            }

            this.closeBurger();
        })

        window.addEventListener('click', (e) => {
            if (this.state.isActive) {
                if (!e.target.closest('header')) {
                    this.closeBurger();
                }
            }
        });
    }

    closeBurger() {
        const body = document.querySelector('body');

        this.setState({isActive: !this.state.isActive,});
        if (body.className === 'body_hidden') body.classList.toggle('body_hidden');
    }

    openBurger(event) {
        event.preventDefault();
        this.setState({
            isActive: !this.state.isActive,
        });

        const body = document.querySelector('body');
        let scroll = document.querySelector('.menu_scroll');
        body.classList.toggle('body_hidden');

        if (!this.state.isActive) {
            setTimeout(() => {
                scroll.scrollTop = 0;
            }, 0);
        }
    }

    render() {
        return (
            <header className="header container">
                <div className="header__container">
                    <div className="logo">
                        <a href={"#home"}>
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>

                    <div className='header__menu-icon' onClick={this.openBurger}>
                        <a href="">
                            <img src={menuicon} alt="menu icon"/>
                        </a>
                    </div>

                    <div className={clsx("hamburger-menu",
                        this.state.isActive && 'hamburger-menu_active')}>
                        <div className="menu__content">
                            <div className="menu_scroll">
                                <Hamburger/>
                            </div>
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


