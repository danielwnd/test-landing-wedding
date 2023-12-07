import SliderServices from "./SliderServices";
import imagenesDefault from "../../../assets/img/img-1.jpg";

export default {
  title: "Oasis's Components/SliderServices",
  component: SliderServices,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'fullscreen', //quita los padding y margin de storybook
    //layout: 'centered', //agrega los padding y margin de storybook
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    hasBorder: { control: "boolean" },
    hideArrow: { control: "boolean" },
  },
};

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
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    hasBorder: true,
    items: itemsInHome,
  },
};

export const Secondary = {
  args: {
    hasBorder: false,
    items: itemsInHome,
  },
};

export const HideArrows = {
  args: {
    hasBorder: true,
    items: itemsInHome,
    hideArrow: true
  },
};
