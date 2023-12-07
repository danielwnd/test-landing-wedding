
import MainHome from "@/components/section/MainHome";
import SliderServices from "@/components/ui/SliderServices";
import imagenesDefault from "../assets/img/img-1.jpg";
import InformationWeddingWithSlider from "@/components/section/InformationWeddingWithSlider";
import WeddingRemember from "@/components/section/WeddingRemember";
import GalleryDescription from "@/components/section/GalleryDescription";
import HomeGalleryCollage from "@/components/section/HomeGalleryCollage";
import galleryImagesMock from "@/mocks/galleryImagesMock";
export const metadata = {
  title: 'Home | Weddings',
  description: 'Planea la mejor boda',
}

export default function Home() {
  const itemsInHome = [
    {
      name: "GRAND OASIS CANCUN",
      src: imagenesDefault,
      url: "/",
      show: "Ver Hotel",
    },
    {
      name: "GRAND OASIS CANCUN",
      src: imagenesDefault,
      url: "/",
      show: "Ver Hotel",
    },
    {
      name: "GRAND OASIS CANCUN",
      src: imagenesDefault,
      url: "/",
      show: "Ver Hotel",
    },
    {
      name: "GRAND OASIS CANCUN",
      src: imagenesDefault,
      url: "/",
      show: "Ver Hotel",
    },
  ];
  const itemsWeddingsInHome = [
    {
      name: "O CEREMONI",
      src: imagenesDefault,
      url: "/",
      show: "6 Invitados",
    },
    {
      name: "O REMEMBER",
      src: imagenesDefault,
      url: "/",
      show: "30 Invitados",
    },
    {
      name: "O FOR YOU",
      src: imagenesDefault,
      url: "/",
      show: "50 Invitados",
    },
    {
      name: "O ROMANCE",
      src: imagenesDefault,
      url: "/",
      show: "90 Invitados",
    },
  ];
  return (
    <>
      <MainHome />
      <div className="container px-3 relative -mt-12 m-auto container-slider-hotels">
        <SliderServices hasBorder items={itemsInHome} infinite={true} />
      </div>
      <WeddingRemember />
      <InformationWeddingWithSlider items={itemsWeddingsInHome} />
      <HomeGalleryCollage gallery={galleryImagesMock.itemsComplete}/>
    </>
  );
}
