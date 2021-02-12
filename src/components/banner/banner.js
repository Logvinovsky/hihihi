import React from 'react';
import "./banner.scss";
import Heading from "./heading";
import Description from "./description";
import Button from "../button";

class Banner extends React.Component {
    render() {
        return (
                <div className="banner container">
                    <div className="banner__container">
                        <Heading/>
                        <Description/>
                        <div className="banner__button">
                            <Button href='#' text='Sign up now'/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Banner;