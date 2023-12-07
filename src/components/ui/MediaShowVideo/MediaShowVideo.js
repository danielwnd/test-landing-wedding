"use client";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MediaShowVideo = (props) => {
  const { media, image, altimage } = props;
  const [showVideo, setShowVideo] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowVideo(!showVideo);
    setTimeout(() => {
        setShowImage(!showImage)
    }, 1000);
  };

  return (
    <div className="media-player-video">
      {showImage && <LazyLoadImage src={image} alt={altimage} className={`image-thum ${!showVideo ? "": "hide"}`} />}
      {media && (
        <>
            <button className={`btn-player ${!showVideo ? "": "hide"}`} onClick={handleClick}>
              <i className="icon icon-svg" />
            </button>
          {!showImage && (
            <iframe className="iframe"
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${media}`}
            ></iframe>
          )}
        </>
      )}
    </div>
  );
};

export default MediaShowVideo;
