import Header from "./components/sections/header/Header";
import Banner from "./components/sections/banner/Banner";
import AboutMe from "./components/sections/about-me/About-me";
import Users from "./components/sections/users/Users";
import SignUp from "./components/sections/sign-up/Sign-up";
import Footer from "./components/sections/footer/Footer";
import clsx from "clsx";
import React from 'react';


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

