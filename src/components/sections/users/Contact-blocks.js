import photo from '../../../images/photo-cover.png'

export default function ContactBlocks(props) {
    return (
        props.users.map(user => {
            let mailLimited = user.email.slice(0, 25);
            if (user.email.length >= 25) mailLimited += '...';

            return (
                <div className='contact-block'>
                    <div className="contact-block__avatar">
                        <img src={photo} alt="avatar"/>
                    </div>

                    <div className="contact-block__name">
                        {user.name}
                    </div>

                    <div className="contact-block__info">
                        <div>
                            {user.position}
                        </div>

                        <div className={'email'}>
                            {mailLimited}

                            <div className="email_hover">
                                {user.email}
                            </div>
                        </div>

                        <div>
                            {user.number}
                        </div>
                    </div>
                </div>
            )
        })
    )
}
//
// function RenderContactBlock(props) {
//     return (
//         <div className='contact-block'>
//             <div className='contact-block__avatar'>
//                 <img src={photo} alt="avatar"/>
//             </div>
//
//             <div className='contact-block__name'>
//                 {props.users[props.i].name}
//             </div>
//
//             <div className="contact-block__info">
//                 <div>
//                     {props.users[props.i].position}
//                 </div>
//                 <div>
//                     {props.users[props.i].mail}
//                 </div>
//                 <div>
//                     {props.users[props.i].number}
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default function ContactBlock(props) {
//     return (
//         <>
//             <RenderContactBlock users={props.users} i={0}/>
//             <RenderContactBlock users={props.users} i={1}/>
//             <RenderContactBlock users={props.users} i={2}/>
//             <RenderContactBlock users={props.users} i={3}/>
//             <RenderContactBlock users={props.users} i={4}/>
//             <RenderContactBlock users={props.users} i={5}/>
//         </>
//     )
// }