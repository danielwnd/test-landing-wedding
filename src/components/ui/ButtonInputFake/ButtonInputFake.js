const ButtonInputFake = (props) => {
    const {placeholder} = props;

    const onClick = () => {
        const {onClick} = props;
        onClick && onClick();
    }

    return ( <button onClick={onClick} className="px-2 text-left fn-roboto-light input-style border border-white rounded w-full">
        {placeholder}
    </button> );
}
 
export default ButtonInputFake;