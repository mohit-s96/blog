import React from "react";
import PostPreview, { CardProps } from "./PostPreview";
import { Story, Meta } from "@storybook/react";
import uri from "../../../public/assets/blog/278-400x400.jpg";

export default {
  title: "PostPreview",
  component: PostPreview,
} as Meta;

const Template: Story<CardProps> = (args) => <PostPreview {...args} />;

export const Small = Template.bind({});

Small.args = {
  blog: {
    imgUri: (uri as unknown) as string,
    altText: "Blog poster image of a scenery",
    content: {
      excerpt:
        "perspiciatis molestias ab voluptates deleniti nostrum aliquid perferendis accusantium culpa quoddolorem eius facilis reiciendis.Aliquid deserunt illum fuga non explicabo qui a. Impedit perspiciatis molestias ab voluptates deleniti nostrum aliquid perferendis accusantium culpa quoddolorem eius facilis reiciendis.Aliquid deserunt illum fuga non explicabo qui a. Impedit perspiciatis molestias ab voluptates deleniti nostrum aliquid perferendis accusantium culpa quoddolorem eius facilis reiciendis.Aliquid deserunt illum fuga non explicabo qui a. Impedit",
      tags: ["#design & mockup", "#figma design", "#css"],
      time: 2,
      title: "Designing a blog in figma, Step by step tutorial",
    },
    layoutType: "horiz",
  },
  theme: "dark",
};
