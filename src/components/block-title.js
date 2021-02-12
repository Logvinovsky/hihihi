import "../scss/elements/block-title.scss";

function BlockTitle(props) {
    return (
        <div className='block-title'>
            {props.children}
            <div className="block-title__heading">
                {props.heading}
            </div>
            <div className="block-title__subheading">
                {props.subheading}
            </div>
        </div>
    );
}

export default BlockTitle;