import React from "react";
import Cards, { CardArrayProps } from "./Cards";
import { Story, Meta } from "@storybook/react";
import data from "../../../data.json";

export default {
  title: "Cards",
  component: Cards,
} as Meta;

const Template: Story<CardArrayProps> = (args) => <Cards {...args} />;

export const Small = Template.bind({});

const testData: CardArrayProps = {
  theme: "dark",
  data: data.map((x) => {
    const obj: CardArrayProps["data"][0] = {
      imgUri: x.images.hero,
      content: {
        excerpt: x.excerpt,
        tags: x.tags,
        time: x.createdAt,
        title: x.title,
      },
    };
    return obj;
  }),
};

Small.args = {
  ...testData,
};
