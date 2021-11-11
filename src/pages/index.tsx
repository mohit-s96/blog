import Layout from "../components/layout";
// import data from "../../data.json";
import Cards, { CardArrayProps } from "../components/main-blog-cards/Cards";
import TagSelector from "../components/tags/TagSelector";
import { useState, useEffect } from "react";
import SearchBlogs from "../components/search-blogs/search";
import { BlogListType } from "../../types/blogtypes";
import { fetchBlogList } from "../../lib/database/getBlogs";
import { ThemeType } from "../../types/globalTypes";
import CustomHead from "../components/head";

type Props = {
  posts: BlogListType[];
};

const testTags = [
  "#c++",
  "#css",
  "#javascript",
  "#typescript",
  "#v8",
  "#design",
  "#figma",
];

const Index = ({ posts }: Props) => {
  return (
    <>
      <CustomHead
        uri="https://mohits.dev/"
        description="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
        title="Mohit's Blog"
        image="https://avatars.githubusercontent.com/u/17087942?v=4"
      />
      <Layout
        render={(theme, searchVisible, setSearchVisible) => {
          return (
            <div className="w-10/12 w-95-res mx-auto">
              {searchVisible ? (
                <SearchBlogs theme={theme} visible={searchVisible} />
              ) : null}
              <TagSelector tags={testTags} theme={theme} variant="md" />
              <Cards data={posts} theme={theme} />
              <div
                style={{ width: "100%", height: "50vh", backgroundClip: "red" }}
              ></div>
            </div>
          );
        }}
      />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const data = await fetchBlogList();
  data.forEach((x) => {
    x!._id = x._id?.toHexString() as any;
  });
  return {
    props: { posts: data },
  };
};
