import React from "react";
import Cards, { Props } from "./Cards";
import { Story, Meta } from "@storybook/react";
import data from "../../../data.json";

export default {
  title: "Cards",
  component: Cards,
} as Meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const Small = Template.bind({});

const testData: Props = {
  theme: "dark",
  data: data.map((x) => {
    const obj: Props["data"][0] = {
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
