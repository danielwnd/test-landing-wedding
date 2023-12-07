import imagen1 from "../assets/img/home/galeria/1-thumb.jpg";
import imagen2 from "../assets/img/home/galeria/2-thumb.jpg";
import imagen3 from "../assets/img/home/galeria/3-thumb.jpg";
import imagen4 from "../assets/img/home/galeria/4-thumb.jpg";
import imagen5 from "../assets/img/home/galeria/1-thumb.jpg";

const items = [
    {
        src: imagen1.src,
        alt: "image-1",
        information: {
            name: "CEREMONIA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    },
    {
        src: imagen2.src,
        alt: "image-2",
        information: {
            name: "CEREMONIA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    },
    {
        src: imagen3.src,
        alt: "image-3",
    },
    {
        src: imagen4.src,
        alt: "image-4",
        information: {
            name: "CEREMONIA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    },
    {
        src: imagen5.src,
        alt: "image-5",
        information: {
            name: "CEREMONIA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    }
]
const itemsComplete = [
    items[0],
    items[1],
    items[2],
    items[3]
]
const itemsThird = [
    items[0],
    items[3],
    items[3],
]
const itemsSecond = [
    items[0],
    items[0],
]
const itemsOne = [
    items[0],
]

const galleryImagesMock = {
    itemsMore: items,
    itemsComplete,
    itemsThird,
    itemsSecond,
    itemsOne,
}

export default galleryImagesMock;