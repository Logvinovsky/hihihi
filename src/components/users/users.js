import React from 'react';
import './users.scss';
import users from './users-list.json';
import BlockTitle from "../block-title";
import Button from "../button";
import ContactBlock from "./contact-block";

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users
        };

    }

    render() {
        return (
            <div className='users'>
                <div className="container section">
                    <BlockTitle heading='Our cheerful users'
                                subheading='Attention! Sorting users by registration date'
                    />

                    <div className="users__content">
                        <ContactBlock users = {this.state.users}/>
                    </div>

                    <div className="users__button">
                        <Button href='#'
                                text='Show more'
                        />
                    </div>
                </div>
            </div>
        )
    }
}