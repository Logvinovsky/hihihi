import './sign-up.scss';
import React from 'react';
import BlockTitle from "../../reusable/Block-title";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import File from "./File";
import RadioButton from "./RadioButtons";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 800});

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameDirty: false,
            usernameError: "Name can't be empty",
            email: '',
            emailDirty: false,
            emailError: "Email can't be empty",
            number: '',
            numberDirty: false,
            numberError: "Number can't be empty",
            position: '',
            formValid: false,

            // errors: {
            //     username: "Name can't be empty",
            //     email: "Email can't be empty",
            //     number: "Number can't be empty",
            // },
            //
            // dirty: {
            //     username: false,
            //     email: false,
            //     number: false,
            // }

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    validateForm() {
        if (this.state.usernameError
            || this.state.emailError
            || this.state.numberError
            || !this.state.position
            || !this.state.file
        ) {
            this.setState({formValid: false});
        } else {
            this.setState({formValid: true});
        }
    }

    handleChange(event) {
        const target = event.target;
        switch (target.name) {
            case 'username':
                const usernameRe = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
                if (!usernameRe.test((event.target.value).toLowerCase())) {
                    this.setState({usernameError: "Username isn't correct"});
                } else {
                    this.setState({usernameError: ''});
                }
                break;

            case 'email':
                const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRe.test((event.target.value).toLowerCase())) {
                    this.setState({emailError: "Email isn't correct"});
                } else {
                    this.setState({emailError: ''});
                }
                break;

            case 'number':
                const numberRe = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                if (!numberRe.test((event.target.value).toLowerCase())) {
                    this.setState({numberError: "Number isn't correct"});
                } else {
                    this.setState({numberError: ''});
                }
                break;
        }

        const {name, value} = event.target;
        this.setState({
            [name]: value,
        }, this.validateForm)
    }


    handleBlur(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({usernameDirty: true});
                if (event.target.value === '') {
                    this.setState({usernameError: "Name can't be empty"});
                }
                break;

            case 'email':
                this.setState({emailDirty: true});
                if (event.target.value === '') {
                    this.setState({emailError: "Email can't be empty"});
                }
                break;

            case 'number':
                this.setState({numberDirty: true});
                if (event.target.value === '') {
                    this.setState({numberError: "Number can't be empty"});
                }
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('ИДИ В СРАКУ');
    }

    render() {
        const positions = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
        return (

            <div className='sign-up'>
                <div className="section container">
                    <ScrollableAnchor id={'registration'}>
                        <div className="sign-up__container">

                            <BlockTitle heading='Register to get a work'
                                        subheading='Attention! After successful registration and
                                 alert, update the list of users in the block from the top'
                            />

                            <form action="" className="sign-up__form" onSubmit={this.handleSubmit}>

                                <Input type='text'
                                       name='username'
                                       title='Name'
                                       placeholder='Your name'
                                       value={this.state.username}
                                       onChange={this.handleChange}
                                       onBlur={this.handleBlur}
                                       maxLength={16}
                                       dirty={this.state.usernameDirty}
                                       error={this.state.usernameError}
                                />

                                <Input type='email'
                                       name='email'
                                       title='Email'
                                       placeholder='Your email'
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       onBlur={this.handleBlur}
                                       dirty={this.state.emailDirty}
                                       error={this.state.emailError}
                                />

                                <Input type='tel'
                                       name='number'
                                       title='Phone number'
                                       placeholder='+380 XX XXX XX XX'
                                       pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                       maxLength={13}
                                       value={this.state.number}
                                       onChange={this.handleChange}
                                       onBlur={this.handleBlur}
                                       dirty={this.state.numberDirty}
                                       error={this.state.numberError}
                                       //assistive='Enter a phone number in international format'
                                />

                                <RadioButton options={positions}
                                             name='position'
                                             onChange={this.handleChange}
                                />

                                <File name='file'
                                      error='Error'
                                      onChange={this.handleChange}
                                />

                                <SubmitButton value='Sign up now'
                                              formValid={this.state.formValid}
                                />
                            </form>
                        </div>
                    </ScrollableAnchor>

                </div>
            </div>
        )
    }
}