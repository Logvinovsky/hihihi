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

    openBurger(event) {
        event.preventDefault();
        this.setState({
            isActive: !this.state.isActive,
        });
        this.props.govnoebanoe();
    }

    render() {
        return (

            <header className="header container">
                {/*<StickyHeader backgroundColor='white'*/}
                {/*              headerOnly={true}*/}
                {/*              //className = 'header__container'*/}
                {/*              header={*/}
                <div className="header__container">
                    <div className="logo">
                        <a href="#">
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
                            <Hamburger/>
                        </div>
                    </div>


                    <nav className="nav">
                        <Nav/>
                    </nav>

                </div>
                {/*}>*/}

                {/*</StickyHeader>*/}
            </header>


        );
    }
}


