import React from "react";
import clsx from "clsx";

export default function Input(props) {
  return (
    <div className='formfield'>
      <label htmlFor={props.name} className='formfield__label'>
        {props.title}
      </label>
      <input
        className={clsx({
          formfield__input: true,
          formfield__input_invalid: props.dirty && props.error,
        })}
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

      <div
        className={clsx(
          "input__error",
          props.dirty && props.error && "input__error_active"
        )}>
        <div>{props.error}</div>
      </div>
    </div>
  );
}
