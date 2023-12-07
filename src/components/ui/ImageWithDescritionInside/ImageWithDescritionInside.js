"use client"
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageWithDescritionInside = (props) => {
    const {classNameContainer, image} = props;

    const handleClick = () => {
        const {onClick} = props;

        onClick && onClick(image);
    }
    return (
        <div className={`box-image-description relative ${classNameContainer}`} onClick={handleClick}>
            <LazyLoadImage className="image-background" src={image.src} alt={image.alt} />
            {image.information && (
                <div className="content-hidden">
                    <div className="content-body">
                        <button className={`btn-icon`} onClick={handleClick}>
                        <i className="icon icon-lupa" />
                        </button>
                        <h5 className="title">{image.information.name}</h5>
                        <p className="description">{image.information.description}</p>
                    </div>
                </div>
            )}
        </div>
     );
}

export default ImageWithDescritionInside;