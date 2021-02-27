import './hamburger-menu.scss';


function RenderLink(props){
    return(
        <a href= {props.href} className = 'menu__link'> {props.text} </a>
    );
}

function Menu(){
    return(
        <>
        <div className = 'menu-content__block'>
            <RenderLink href = '#' text = 'About me'/>
            <RenderLink href = '#' text = 'Relationships'/>
            <RenderLink href = '#' text = 'Users'/>
            <RenderLink href = '#' text = 'Sign Up'/>
            <RenderLink href = '#' text = 'Terms and Conditions'/>
        </div>

        <div className = 'menu-content__block'>
            <RenderLink href = '#' text = 'How it works'/>
            <RenderLink href = '#' text = 'Partnership'/>
            <RenderLink href = '#' text = 'Help'/>
            <RenderLink href = '#' text = 'Leave testimonial'/>
            <RenderLink href = '#' text = 'Contact us'/>
        </div>

        <div className = 'menu-content__block'>
            <RenderLink href = '#' text = 'Articles'/>
            <RenderLink href = '#' text = 'Our news'/>
            <RenderLink href = '#' text = 'Privacy Policy'/>
            <RenderLink href = '#' text = 'Licenses'/>
            <RenderLink href = '#' text = 'Privacy Policy'/>
        </div>
        </>
    );
}

export default Menu;
