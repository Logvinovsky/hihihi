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
    }

    componentDidMount() {//я уверен, что этот код нужно писать не здесь,АРТЕМ ПОМОГИИ ОБЪЯСНИ
        const menu = document.querySelector('.hamburger-menu');
        const body = document.querySelector('body');

        menu.addEventListener('click', (e) => {
            const target = e.target;

            if (!target.closest('a')) {
                return false;
            }

            menu.classList.toggle('hamburger-menu_active');
            this.setState({isActive: !this.state.isActive,});
            if (body.className === 'body_hidden') body.classList.toggle('body_hidden');
        })

        window.addEventListener('click', (e) => {
            if (this.state.isActive) {
                if (!e.target.closest('header')) {
                    menu.classList.toggle('hamburger-menu_active');
                    this.setState({isActive: !this.state.isActive});
                    body.classList.toggle('body_hidden');
                }
            }
        });
    }

    openBurger(event) {
        event.preventDefault();
        this.setState({
            isActive: !this.state.isActive,
        });

        const body = document.querySelector('body');
        body.classList.toggle('body_hidden');
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


