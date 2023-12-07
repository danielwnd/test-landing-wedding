"use client";
import React from "react";
import ModalCustom from "@/components/ui/ModalCustom";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ModalGallerySelection = (props) => {
    const {showModal, items, itemSelect, id} = props;
    const slider = React.useRef(null);

    const PreArrows = (props) => {
        const { className, style, onClick } = props;
        return (
          <button className={className} onClick={onClick} style={{ ...style, marginLeft: 20, zIndex: 12312312 }}>
            <i className="icon icon-chevron-left" />
          </button>
        )
      }
      const NextArrows = (props) => {
        const { className, style, onClick } = props;
    
        return (
          <button className={className} onClick={onClick} style={{ ...style, right: 10, zIndex: 12312312 }}>
            <i className="icon icon-chevron-right" />
          </button>
        )
      }

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 1000,
        arrows: true,
        variableHeight: true,
        prevArrow: <PreArrows />,
        nextArrow: <NextArrows />,

        //variableWidth: true, //quita los paddings al expandir el contenedor y se adapta al contenido hijo
      };
    return ( 
        <ModalCustom show={showModal} id={id}>
        <div className={``}>
        {items && (
          <Slider ref={slider} {...settings}>
            {items.map((imagen, i) => (
                <LazyLoadImage key={i} src={imagen.src} alt={imagen.alt} height={350} />
            ))}
          </Slider>
        )}
      </div>
      </ModalCustom>
     );
}
 
export default ModalGallerySelection;