import React from 'react';
import clsx from "clsx";

export default function Input(props) {

    return (
        <div className='formfield'>
            <label htmlFor={props.name} className='formfield__label'>{props.title}</label>
            <input className={clsx('formfield__input',
                (props.dirty && props.error) && "formfield__input_invalid",
                (!props.error || !props.dirty) && "formfield__input_focused"
                )}
                   type={props.type}
                   placeholder={props.placeholder}
                   id={props.name}
                   name={props.name}
                   required
                   value={props.value}
                   pattern={props.pattern}
                   onChange={props.onChange}
                   onBlur={props.onBlur}
                   maxLength={props.maxLength}
            />

            <div className={clsx("input__error",
                (props.dirty && props.error) && "input__error_active")}>{props.error}</div>

            {/*<span className='formfield__assistive-text'>*/}
            {/*    {props.assistive}*/}
            {/*</span>*/}
        </div>
    )
}

