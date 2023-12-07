import CardBasic from "./CardBasic";

export default {
  title: "Oasis's Components/CardBasic",
  component: CardBasic,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'fullscreen', //quita los padding y margin de storybook
    //layout: 'centered', //agrega los padding y margin de storybook
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Panadería",
    subtitle: "Weddings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Scelerisque.<br><br>In dictum non consectetur. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Eget lorem dolor sed Viverra ipsum ",
    hideButton: false,
    textButton: "Ver panuchos",
  },
};

export const Secondary = {
  args: {
    title: "Panadería",
    subtitle: "Weddings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Scelerisque.<br><br>In dictum non consectetur. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Eget lorem dolor sed Viverra ipsum ",
    hideButton: true,
  },
};
