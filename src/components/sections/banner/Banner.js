import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor'

import Heading from "./Heading";
import Description from "./Description";
import Button from "../../reusable/Button";
import "./Banner.scss";

configureAnchors({offset: -60, scrollDuration: 800});

class Banner extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'home'}>
                <div className="banner container">
                    <div className="banner__container">
                        <Heading/>
                        <Description/>
                        <div className="banner__button">
                            <Button href='#registration' text='Sign up now'/>
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default Banner;