
function RenderLink(props) {
    return (
        <a href={props.href} className='nav__link'> {props.text} </a>
    );
}

function Nav() {
    return (
        <>
            <RenderLink href='#' text='About me'/>
            <RenderLink href='#' text='Relationships'/>
            <RenderLink href='#' text='Requirements'/>
            <RenderLink href='#' text='Users'/>
            <RenderLink href='#' text='Sign Up'/>
        </>

    );
}

export default Nav;