"use client";
import MediaShowVideo from "../../ui/MediaShowVideo";
import CardBasic from "../../ui/CardBasic";
import GalleryCollage from "../../ui/GalleryCollage";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import useClientComponents from "@/hooks/useClientComponents";

const GalleryDescription = (props) => {
  const { media, gallery, className, ...rest } = props;
  const isClient = useClientComponents();
  const isTablet = useMediaQuery({ maxWidth: breakpointConstants.LG });
  const handleClickImage = (data) => {
    const { onClickImage } = props;
    onClickImage && onClickImage(data);
  };

  return (
    <div className={`gallery-description ${className}`}>
      <div>
        <CardBasic {...rest} />
        {isClient && !isTablet && (
          <div className="content-media">
            <MediaShowVideo {...media} />
          </div>
        )}
      </div>
      <div>
        <GalleryCollage items={gallery} onClickImage={handleClickImage} />
        {isClient && isTablet && (
          <div className="content-media pt-1">
            <MediaShowVideo {...media} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryDescription;
