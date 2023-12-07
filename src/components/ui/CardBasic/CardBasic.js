const CardBasic = (props) => {
    const {title, subtitle, description, hideButton, textButton} = props;
    return ( <div className="card-basic-info">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
        {hideButton !== true && (
            <button className="btn btn-secondary">{textButton}</button>
        )}
    </div> );
}

export default CardBasic;