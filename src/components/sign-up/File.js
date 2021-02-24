export default function File(props) {
    return (
        <div className='form__formfield'>
            <div className="file">
                <span className="formfield__label">
                    {props.label}
                </span>

                <input className='file__input'
                       type="file"
                       ref={props.ref}
                       id={props.name}
                       name={props.name}
                       required
                />

                <label htmlFor={props.name}
                       className='file-custom formfield__input'
                />

                <span className="formfield__error-text">
                    {props.error}
                </span>
            </div>
        </div>
    )
}