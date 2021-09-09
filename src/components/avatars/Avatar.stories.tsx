import React from "react";
import Avatar, { Props } from "./Avatar";
import { Story, Meta } from "@storybook/react";
import uri from "../../../public/favicon/icon-512x512.png";

export default {
  title: "Avatar Image",
  component: Avatar,
} as Meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});

Small.args = {
  alt: "Branding, main logo",
  imageUri: (uri as unknown) as string,
  size: "lg",
};
