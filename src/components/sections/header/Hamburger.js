import './hamburger-menu.scss';
import links from './hamburger-links.json';


//  function RenderLink(props) {
//     return (
//         <a href={props.href} className='menu__link'> {props.text} </a>
//     );
// }

export default function Hamburger() {
    return (
            <div className={'menu-content__block'}>
                {links.map(link => {
                        return (
                            <a href={link.href} key={link.text} className={'menu__link'}>
                                {link.text}
                            </a>
                        )
                    }
                )}
            </div>
    )
}

// {/*            <div className={'menu-content__block'}>*/
// }
// {/*                {links.map((link, index) => {if(5 < index <= 10)*/
// }
// {/*                        return (*/
// }
// {/*                            <a href={link.href} key={link.text} className={'menu__link'}>*/
// }
// {/*                                {link.text}*/
// }
// {/*                            </a>*/
// }
// {/*                        )*/
// }
// {/*                    }*/
// }
// {/*                )}*/
// }
// {/*            </div>*/
// }
//
// {/*            <div className={'menu-content__block'}>*/
// }
// {/*                {links.map((link, index) => {if(index > 10)*/
// }
// {/*                        return (*/
// }
// {/*                            <a href={link.href} key={link.text} className={'menu__link'}>*/
// }
// {/*                                {link.text}*/
// }
// {/*                            </a>*/
// }
// {/*                        )*/
// }
// {/*                    }*/
// }
// {/*                )}*/
// }
// {/*            </div>*/
// }
// {/*        </>*/
// }
// {/*    );*/
// }
// {/*}*/
// }
//
//
// {/*// <>*/
// }
// {/*// <div className='menu-content__block'>*/
// }
// {/*// <RenderLink href='#' text='About me'/>*/
// }
// {/*// <RenderLink href='#' text='Relationships'/>*/
// }
// {/*// <RenderLink href='#' text='Users'/>*/
// }
// {/*// <RenderLink href='#' text='Sign Up'/>*/
// }
// {/*// <RenderLink href='#' text='Terms and Conditions'/>*/
// }
// {/*// </div>*/
// }
// {/*//*/
// }
// {/*// <div className='menu-content__block'>*/
// }
// {/*// <RenderLink href='#' text='How it works'/>*/
// }
// {/*// <RenderLink href='#' text='Partnership'/>*/
// }
// {/*// <RenderLink href='#' text='Help'/>*/
// }
// {/*// <RenderLink href='#' text='Leave testimonial'/>*/
// }
// {/*// <RenderLink href='#' text='Contact us'/>*/
// }
// {/*// </div>*/
// }
// {/*//*/
// }
// {/*// <div className='menu-content__block'>*/
// }
// {/*// <RenderLink href='#' text='Articles'/>*/
// }
// {/*// <RenderLink href='#' text='Our news'/>*/
// }
// {/*// <RenderLink href='#' text='Privacy Policy'/>*/
// }
// {/*// <RenderLink href='#' text='Licenses'/>*/
// }
// {/*// <RenderLink href='#' text='Privacy Policy'/>*/
// }
// {/*// </div>*/
// }
// {/*// </>*/
// }
// {/*//     );*/
// }
// {/*// }*/
// }
// {/*//*/

