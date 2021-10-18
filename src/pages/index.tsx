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
// const testData: CardArrayProps = {
//   theme: "light",
//   data: data.map((x) => {
//     const obj: CardArrayProps["data"][0] = {
//       imgUri: x.images.hero,
//       content: {
//         excerpt: x.excerpt,
//         tags: x.tags,
//         time: x.createdAt,
//         title: x.title,
//       },
//     };
//     return obj;
//   }),
// };
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
  const [visible, setVisible] = useState(1920);
  const [theme, setTheme] = useState<ThemeType>("light");
  useEffect(() => {
    setVisible(window.innerWidth);
  }, []);
  return (
    <Layout theme={theme}>
      <SearchBlogs theme={theme} />
      {visible >= 1024 ? (
        <TagSelector
          tags={
            visible >= 1024 && visible < 1200 ? testTags.slice(0, 5) : testTags
          }
          theme={theme}
          variant="md"
        />
      ) : null}
      <Cards data={posts} theme={theme} />
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
