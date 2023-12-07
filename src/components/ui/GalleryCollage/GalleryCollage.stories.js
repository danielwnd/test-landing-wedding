import GalleryCollage from "./GalleryCollage";
import galleryImagesMock from "../../../mocks/galleryImagesMock";

export default {
  title: "Oasis's Components/GalleryCollage",
  component: GalleryCollage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'fullscreen', //quita los padding y margin de storybook
    layout: "centered", //agrega los padding y margin de storybook
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    items: galleryImagesMock.itemsComplete
  },
};

export const Third = {
  args: {
    items: galleryImagesMock.itemsThird
  },
};

export const Second = {
  args: {
    items: galleryImagesMock.itemsSecond
  },
};

export const OneImage = {
  args: {
    items: galleryImagesMock.itemsOne
  },
};
