import Layout from "../components/layout";
import data from "../../data.json";
import Cards, { CardArrayProps } from "../components/main-blog-cards/Cards";
import TagSelector from "../components/tags/TagSelector";

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
const Index = ({}: Props) => {
  return (
    <Layout theme={testData.theme}>
      <TagSelector
        tags={[
          "#c++ 8",
          "#css 5",
          "#javascript 4",
          "typescript 2",
          "#v8 3",
          "#design 4",
          "#figma 5",
        ]}
        theme={testData.theme}
        variant="md"
      />
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
