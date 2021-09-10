import React from "react";
import TagSelector, { Props } from "./TagSelector";
import { Story, Meta } from "@storybook/react";
import uri from "../../../public/assets/blog/278-400x400.jpg";

export default {
  title: "TagSelector",
  component: TagSelector,
} as Meta;

const Template: Story<Props> = (args) => <TagSelector {...args} />;

export const Small = Template.bind({});

Small.args = {
  tags: [
    "#css 5",
    "#c++ 8",
    "#html 2",
    "#react 12",
    "#systems 4",
    "#javascript es6 15",
  ],
  theme: "dark",
};
