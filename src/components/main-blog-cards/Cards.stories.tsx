import React from "react";
import Cards, { CardArrayProps } from "./Cards";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Cards",
  component: Cards,
} as Meta;

const Template: Story<CardArrayProps> = (args) => <Cards {...args} />;

export const Small = Template.bind({});

const testData: CardArrayProps = {
  theme: "dark",
  data: [
    {
      lastEdited: null,
      author: "msx47",
      readingTime: "5",
      commentCount: 14,
      commentsAllowed: false,
      createdAt: 10153486431,
      excerpt:
        "vwk wfnpowjg[w wnvpqwfn qf nqwkfnqpwnhfg;w gk;w/q fpq[fjiwngv wv pwofjnwomvejbn.mv[wekgw[jgn  vopowjepismv b d,bowejgs,v[pwb s",
      images: [
        {
          alt: "scs",
          isHero: true,
          permUri: [{ data: { Key: "https://picusm.com/400" }, error: null }],
        },
      ],
      likes: 25,
      shares: 3,
      slugType: "md",
      tags: ["vwvw", "vwvw", "fqpfjq"],
      title: "some post",
      uri: "some_fin_post",
      viewCount: 45,
    },
  ],
};

Small.args = {
  ...testData,
};
