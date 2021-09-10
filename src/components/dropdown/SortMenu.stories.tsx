import React from "react";
import SortMenu, { Props } from "./SortMenu";
import { Story, Meta } from "@storybook/react";

export default {
  title: "SortMenu",
  component: SortMenu,
} as Meta;

const Template: Story<Props> = (args) => <SortMenu {...args} />;

export const Small = Template.bind({});

Small.args = {
  visible: true,
};
