const SocialNetworkButton = (props) => {
    const {href, type, name} = props;

    return ( <a href={href} className="btn-social"><i className={`icon icon-${type}`} /></a> );
}

export default SocialNetworkButton;