import React from "react";
import NavItem, { Props } from "./NavItem";
import { Story, Meta } from "@storybook/react";

export default {
  title: "NavItem",
  component: NavItem,
} as Meta;

const Template: Story<Props> = (args) => <NavItem {...args} />;

export const Multi = Template.bind({});

Multi.args = {
  children: "Search",
  size: "md",
  theme: "dark",
};
