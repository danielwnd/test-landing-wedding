"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import GalleryDescription from "../GalleryDescription";
import imageCover from "../../../assets/img/home/galeria/cover-video.jpg";
import ModalCustom from "@/components/ui/ModalCustom";
import ModalGallerySelection from "./components/ModalGallerySelection";

const HomeGalleryCollage = (props) => {
  const { gallery } = props;
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const texts = useTranslations("home.gallery");
  const handleClickImage = (data) => {
    setShowModal(!showModal);
    setItemSelected(data);
  };
  return (
    <>
      <div className="container px-3 relative m-auto flex">
        <GalleryDescription
          className="m-auto"
          description={texts("text")}
          gallery={gallery}
          media={{
            altimage: "Weddings",
            image: imageCover.src,
            media: "tgbNymZ7vqY",
          }}
          subtitle="Weddings"
          textButton={texts("btn")}
          title={texts("title")}
          onClickImage={handleClickImage}
        />
      </div>
      <ModalGallerySelection id="modal-gallery" showModal={showModal} items={gallery} itemSelect={itemSelected} />
    </>
  );
};

export default HomeGalleryCollage;
