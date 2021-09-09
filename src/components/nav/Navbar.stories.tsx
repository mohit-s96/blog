import React from "react";
import Navbar, { Props } from "./Navbar";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Navbar",
  component: Navbar,
} as Meta;

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  theme: "dark",
};
