import React from "react";
import Tags, { TagProps } from "./Tags";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Tag Button",
  component: Tags,
  argTypes: {
    variant: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    theme: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tags {...args} />;

export const Small = Template.bind({});

Small.args = {
  children: "#css  7",
  theme: "dark",
  variant: "sm",
};

export const Medium = Template.bind({});

Medium.args = {
  children: "#typescript  4",
  theme: "dark",
  variant: "md",
};
