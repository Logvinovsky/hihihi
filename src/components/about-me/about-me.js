import './about-me.scss';
import BlockTitle from "../block-title";
//import AboutMeImg from "./image";
import Content from "./content";
import img from "../../images/man-laptop-v1.svg";


function AboutMe(props) {
    return (
        <div className='about-me section container'>
            <BlockTitle>
                <h2 className="about-me__heading">
                    Let's get acquainted
                </h2>
            </BlockTitle>

            <div className="about-me__container">
                <div className="about-me__image">
                    <img src = {img} alt="man-laptop"/>
                </div>

                <div className="about-me__content">
                    <Content/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;