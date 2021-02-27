import React from 'react';
import './users.scss';
import users from './users-list.json';
import BlockTitle from "../../reusable/Block-title";
import Button from "../../reusable/Button";
import ContactBlock from "./Contact-block";

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