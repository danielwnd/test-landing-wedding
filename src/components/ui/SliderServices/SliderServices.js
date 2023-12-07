"use client";
import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderServices = (props) => {
  const { hasBorder, items, autoPlay, hideArrow, type, ...rest } = props;
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: autoPlay,
    speed: 1000,
    arrows: false,
    variableWidth: true, //quita los paddings al expandir el contenedor y se adapta al contenido hijo
    //slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0',
    responsive: [
      // {
      //   breakpoint: 920,
      //   settings: {
      //     centerMode: false,
      //     slidesToShow: 2,
      //   },
      // },
      // {
      //   breakpoint: 1279,
      //   settings: {
      //     centerMode: false,
      //     slidesToShow: 3,
      //     centerPadding: '0',
      //   },
      // },
    ],
    ...rest
  };

  return (
    <>
      <div className={`container-slider ${hasBorder ? "slider-border" : ""}`}>
        {items && (
          <Slider ref={slider} {...settings}>
            {items.map((imagen, i) => (
              <a
                className={`card-service ${type === "wedding" ? "card-wedding": "card-hotel"}`}
                key={i}
                position={i}
                href={imagen.url}
              >
                <LazyLoadImage src={imagen.src.src} alt={imagen.name} />
                <div className="container-body text-center">
                  <h5 className="title fn-roboto-light">{imagen.name}</h5>
                  <span className="subtitle fn-roboto-medium">
                    {imagen.show}
                  </span>
                </div>
              </a>
            ))}
          </Slider>
        )}
      </div>
      {hideArrow != true && (
        <div className="container-slider-button-externals">
          <button onClick={() => slider?.current?.slickPrev()}>
            <i className="icon icon-chevron-left-circle" />
          </button>
          <button onClick={() => slider?.current?.slickNext()}>
            <i className="icon icon-chevron-right-circle" />
          </button>
        </div>
      )}
    </>
  );
};

export default SliderServices;
