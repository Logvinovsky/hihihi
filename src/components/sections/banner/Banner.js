import React from 'react';
import "./banner.scss";
import Heading from "./Heading";
import Description from "./Description";
import Button from "../../reusable/Button";

class Banner extends React.Component {
    render() {
        return (
                <div className="banner container">
                    <div className="banner__container">
                        <Heading/>
                        <Description/>
                        <div className="banner__button">
                            <Button href='#registration' text='Sign up now'/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Banner;