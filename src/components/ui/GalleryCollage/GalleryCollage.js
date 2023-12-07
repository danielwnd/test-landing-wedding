"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageWithDescritionInside from "../ImageWithDescritionInside";

const GalleryCollage = (props) => {
  const { items } = props;
  const itemCount = items.length;
  const tagsImagen = [
    "first-image",
    "second-image",
    "third-image",
    "last-image",
  ];
  const classNumberGallery =
    itemCount >= 4
      ? "gallery-fourth"
      : itemCount === 3
      ? "gallery-third"
      : itemCount === 2
      ? "gallery-second"
      : itemCount <= 1 && "gallery-first";
  const newItems = itemCount
    ? itemCount <= 4
      ? items
      : items.slice(0, 4)
    : [];
  const handleClick = (data) => {
    const {onClickImage} = props;
    onClickImage && onClickImage(data);
  }
  return (
    <div className={`gallery-collage ${classNumberGallery}`}>
      {newItems.map((item, i) => {
        return (
          <ImageWithDescritionInside key={i}
          classNameContainer={`${tagsImagen[i]}`} image={item}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default GalleryCollage;
