import React from 'react';
// import clsx from "clsx";

import Header from "./components/sections/Header/Header";
import Banner from "./components/sections/Banner/Banner";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Users from "./components/sections/Users/Users";
import SignUp from "./components/sections/SignUp/SignUp";
import Footer from "./components/sections/Footer/Footer";


export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         hamburgerOpened: false,
    //     }
    //
    //     this.change = this.change.bind(this);
    // }
    //
    // change() {
    //     this.setState({
    //         hamburgerOpened: !this.state.hamburgerOpened,
    //     })
    // }

    render() {
        return (
            <>
                <Header/>
                {/*<div className={clsx('', this.state.hamburgerOpened && 'background-cover')}>*/}
                {/* <div className={'stop'}>*/}
                     <Banner/>
                    <AboutMe/>
                    <Users/>
                    <SignUp/>
                    <Footer/>
                {/* </div>*/}
                {/*</div>*/}
            </>
        );
    }
}

