import '../scss/elements/button.scss';

function Button(props){
    return (
        <a className = 'button button__link' href={props.href}>{props.text}</a>
    );
}

export default Button;