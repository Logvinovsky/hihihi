import React from 'react';

export default function Input(props) {


    return (
        <div className='form__formfield'>
            <label htmlFor={props.name} className='formfield__label'>{props.title}</label>
            <input className='formfield__input'
                   type={props.type}
                   placeholder={props.placeholder}
                   id={props.name}
                   name={props.name}
                   required
                   value={props.value}
                   pattern={props.pattern}
                   onChange={props.onChange}
                   maxLength={props.maxLength}
            />
            <span className="formfield__error-text">
                {props.error}
            </span>
            <span className='formfield__assistive-text'>
                {props.assistive}
            </span>
        </div>
    )
}

