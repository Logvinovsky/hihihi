export default function RadioButtons(props) {
    return (
        <div className='formfield'>
            <span className="formfield__label"> Select your position </span>
            <div className="radio-buttons">
                {props.options.map(option => {
                    return (
                        <div className='radio-button' key = {option}>
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