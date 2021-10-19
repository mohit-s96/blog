import Layout from "../components/layout";
// import data from "../../data.json";
import Cards, { CardArrayProps } from "../components/main-blog-cards/Cards";
import TagSelector from "../components/tags/TagSelector";
import { useState, useEffect } from "react";
import SearchBlogs from "../components/search-blogs/search";
import { BlogListType } from "../../types/blogtypes";
import { fetchBlogList } from "../../lib/database/getBlogs";
import { ThemeType } from "../../types/globalTypes";

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
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <Layout theme={theme}>
      <SearchBlogs theme={theme} />
      <TagSelector tags={testTags} theme={theme} variant="md" />
      <Cards data={posts} theme={theme} />
      <div
        style={{ width: "100%", height: "50vh", backgroundClip: "red" }}
      ></div>
    </Layout>
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
