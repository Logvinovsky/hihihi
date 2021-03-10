import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor'

import './Users.scss';
import users from './Users-list.json';
import BlockTitle from "../../reusable/Block-title";
import Button from "../../reusable/Button";
import ContactBlocks from "./Contact-blocks";

configureAnchors({offset: -60, scrollDuration: 800});

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users
        };

    }

    render() {
        return (
            <ScrollableAnchor id={'users'}>
                <div className='users'>
                    <div className="container section">
                        <BlockTitle heading='Our cheerful users'
                                    subheading='Attention! Sorting users by registration date'
                        />

                        <div className="users__content">
                            <ContactBlocks users={this.state.users}/>
                        </div>

                        <div className="users__button">
                            <Button href='#'
                                    text='Show more'
                            />
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}