import './sign-up.scss';
import React from "react";
import BlockTitle from "../block-title";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import File from "./File";
import RadioButton from "./RadioButtons";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            number: '',
            options: ['Frontend developer', 'Backend developer', 'Designer', 'QA'],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        alert('ИДИ В СРАКУ');
    }

    render() {
        return (
            <div className='sign-up'>
                <div className="section container">
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
                                   pattern='[A-Z]{1}[a-z]{0,}'
                                   value={this.state.username}
                                   onChange={this.handleChange}
                                   error='Error'
                                   maxLength={16}
                            />

                            <Input type='email'
                                   name='email'
                                   title='Email'
                                   placeholder='Your email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   error='Error'
                            />

                            <Input type='tel'
                                   name='number'
                                   title='Phone number'
                                   placeholder='+380 XX XXX XX XX'
                                   pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                   maxLength={13}
                                   value={this.state.number}
                                   onChange={this.handleChange}
                                   error='Error'
                                   assistive='Enter a phone number in international format'
                            />

                            <RadioButton options={this.state.options}
                                         name='position'
                                         onChange={this.handleChange}
                            />

                            <File ref={this.fileInput}
                                  name='photo'
                                  error='Error'
                            />

                            <SubmitButton value='Sign up now'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    // componentDidUpdate() {
    //     console.log(this.state);
    // }
}