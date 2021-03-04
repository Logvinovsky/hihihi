import './about-me.scss';
import BlockTitle from "../../reusable/Block-title";
import Content from "./Content";
import img from "../../../images/man-laptop-v1.svg";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 800});

export default function AboutMe(props) {
    return (
        <ScrollableAnchor id={'about-me'}>
            <div className='about-me section container'>
                <BlockTitle>
                    <h2 className="about-me__heading">
                        Let's get acquainted
                    </h2>
                </BlockTitle>

                <div className="about-me__container">
                    <div className="about-me__image">
                        <img src={img} alt="man-laptop"/>
                    </div>

                    <div className="about-me__content">
                        <Content/>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>

    );
}
