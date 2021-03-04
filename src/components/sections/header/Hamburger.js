import './hamburger-menu.scss';
import links from './hamburger-links.json';


 function RenderLink(props) {
    return (
        <a href={props.href} className='menu__link'> {props.text} </a>
    );
}

// export default function Hamburger() {
//     return (
//
//                 links.map((link,index) => {
//                     if(index % 5 === 0) {
//                         return (
//                             <div className={'menu-content__block'}>
//                                 <a href={link.href} key={link.text} className={'menu__link'}>
//                                     {link.text}
//                                 </a>
//                             </div>
//                         )
//                     }else return(<a href={link.href} key={link.text} className={'menu__link'}>
//                         {link.text}
//                     </a>)
//                     }
//                 )
//     )
// }



export default function Hamburger() {
    return(
        <>
            <div className = 'menu-content__block'>
                <RenderLink href = '#about-me' text = 'About me'/>
                <RenderLink href = '#home' text = 'Relationships'/>
                <RenderLink href = '#users' text = 'Users'/>
                <RenderLink href = '#registration' text = 'Sign Up'/>
                <RenderLink href = '#home' text = 'Terms and Conditions'/>
            </div>

            <div className = 'menu-content__block'>
                <RenderLink href = '#registration' text = 'How it works'/>
                <RenderLink href = '#registration' text = 'Partnership'/>
                <RenderLink href = '#registration' text = 'Help'/>
                <RenderLink href = '#registration' text = 'Leave testimonial'/>
                <RenderLink href = '#registration' text = 'Contact us'/>
            </div>

            <div className = 'menu-content__block'>
                <RenderLink href = '#registration' text = 'Articles'/>
                <RenderLink href = '#registration' text = 'Our news'/>
                <RenderLink href = '#registration' text = 'Privacy Policy'/>
                <RenderLink href = '#registration' text = 'Licenses'/>
                <RenderLink href = '#' text = 'Privacy Policy'/>
            </div>
        </>);
}


