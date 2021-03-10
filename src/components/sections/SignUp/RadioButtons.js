export default function RadioButtons(props) {
  const positions = JSON.parse(localStorage.getItem("positions"));
  return (
    <div className='formfield'>
      <span className='formfield__label'> Select your position </span>
      <div className='radio-buttons'>
        {positions.map(position => {
          return (
            <div className='radio-button' key={position.id}>
              <label className='radio-button__label'>
                <input
                  type='radio'
                  className='radio-button__input'
                  id={position.id + 1}
                  name={props.name}
                  value={position.name}
                  onChange={props.onChange}
                />

                <span className='radio-button__circle' />

                {position.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
