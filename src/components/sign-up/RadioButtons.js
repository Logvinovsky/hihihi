export default function RadioButton(props) {
    return (
        <div className='form__formfield'>
            <span className="formfield__label"> Select your position </span>
            <div className="radio-buttons">
                {props.options.map(option => {
                    return (
                        <div className='radio-button'>
                            <label className="radio-button__label">
                                <input type="radio"
                                       className='radio-button__input'
                                       id={props.name}
                                       name={props.name}
                                       value={option}
                                       onChange={props.onChange}
                                />

                                <span className="radio-button__circle"/>

                                {option}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}