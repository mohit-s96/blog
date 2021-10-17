import Layout from "../components/layout";
import data from "../../data.json";
import Cards, { CardArrayProps } from "../components/main-blog-cards/Cards";
import TagSelector from "../components/tags/TagSelector";
import { useState, useEffect } from "react";
import SearchBlogs from "../components/search-blogs/search";

type Props = {
  posts: [number];
};
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
const testTags = [
  "#c++ 8",
  "#css 5",
  "#javascript 4",
  "typescript 2",
  "#v8 3",
  "#design 4",
  "#figma 5",
];
const Index = ({}: Props) => {
  const [visible, setVisible] = useState(768);
  useEffect(() => {
    setVisible(window.innerWidth);
  }, []);
  return (
    <Layout theme={testData.theme}>
      {visible >= 1024 ? (
        <TagSelector
          tags={
            visible >= 1024 && visible < 1200 ? testTags.slice(0, 5) : testTags
          }
          theme={testData.theme}
          variant="md"
        />
      ) : null}
      <SearchBlogs theme={testData.theme} />
      <Cards {...testData} />
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: { posts: [5] },
  };
};
