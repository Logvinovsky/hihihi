//Тут мб саделать NavList и передать в пропсы массив объектов
//хотя хуйня

// import * as React from "react";
//
// function Link(props){
//     const href = props.href;
//     const text = props.text;
//     return(
//         <a href= {href} className = 'nav__link'> {text} </a>
//     );
// }
//
// class Nav extends React.Component{
//     renderLink(href, text){
//         return(
//             <Link href = {href} text ={text} />
//         )
//     }
//
//     render(){
//         return(
//             <nav className='nav'>
//                 {this.renderLink('#', 'About me')}
//                 {this.renderLink('#', 'Relationships')}
//                 {this.renderLink('#', 'Requirements')}
//                 {this.renderLink('#', 'Users')}
//                 {this.renderLink('#', 'Sign Up')}
//             </nav>
//         );
//     }

    function RenderLink(props){
        return(
            <a href= {props.href} className = 'nav__link'> {props.text} </a>
        );
    }

    function Nav(){
    return(
    <>
        <RenderLink href = '#' text = 'About me' />
        <RenderLink href = '#' text = 'Relationships' />
        <RenderLink href = '#' text = 'Requirements' />
        <RenderLink href = '#' text = 'Users' />
        <RenderLink href = '#' text = 'Sign Up' />
    </>

    );
}

export default Nav;