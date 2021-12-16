import React from "react";
import PostPreview, { CardProps } from "./PostPreview";
import { Story, Meta } from "@storybook/react";

export default {
  title: "PostPreview",
  component: PostPreview,
} as Meta;

const Template: Story<CardProps> = (args) => <PostPreview {...args} />;

export const Small = Template.bind({});

Small.args = {
  blog: {
    isArchived: false,
    lastEdited: null,
    readingTime: "5",
    author: "msx47",
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
  theme: "dark",
  layoutType: "vert",
};
