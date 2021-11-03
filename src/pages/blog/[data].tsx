import { fetchPathData, fetchSingleBlog } from "../../../lib/database/getBlogs";
import { BlogSlug, RelatedBlogsType } from "../../../types/blogtypes";
import CustomHead from "../../components/head";
import Layout from "../../components/layout";
import MainBlog from "../../components/main-blog/mainBlog";
import RelatedBlogs from "../../components/related-bar/relatedBlogs";
import StatsBar from "../../components/statsbar/statsBar";

type Props = {
  data: BlogSlug;
};

const dummyRelatedBlogsData: RelatedBlogsType = [
  {
    tags: ["react", "typescript", "nextjs"],
    title: "react next js setup with typescript",
    uri: "react_typescript_next",
    _id: "ek bfwe bfelfnwen" as any,
  },
  {
    tags: ["typescript", "compiler", "languages"],
    title: "simple compiler in typescript",
    uri: "typescript_compiler",
    _id: "Vsdvsvsfelfnwen" as any,
  },
  {
    tags: ["nodejs", "authentication", "express"],
    title: "set up express authentication middleware in nextjs",
    uri: "node_express_auth",
    _id: "ek bfwe bfelfnwen dcewf" as any,
  },
  {
    tags: ["sharp", "images", "javascript"],
    title: "image processing pipeline with sharp",
    uri: "havascrripr_sharp_images",
    _id: "cbpegjmwe; v vw;ene" as any,
  },
];

const Post = ({
  data: {
    author,
    excerpt,
    blogData,
    commentCount,
    tags,
    slugType,
    shares,
    images,
    createdAt,
    commentsAllowed,
    likes,
    title,
    uri,
    viewCount,
    _id,
    metadata,
    rawBody,
  },
  data,
}: Props) => {
  return (
    <>
      <CustomHead
        uri={`https://mohits.dev/blog/${uri}`}
        description={excerpt}
        title={title}
        image={images[0].permUri[0].data!.Key}
      />
      <Layout
        render={(theme) => {
          return (
            <main
              className={`grid grid-cols-12 2xl:w-10/12 w-full mx-auto dark:bg-primary-bg-dark bg-primary-bg-light`}
            >
              <StatsBar
                stats={{ commentCount, likes, viewCount, uri, title }}
                theme={theme}
              />
              <MainBlog theme={theme} data={data} />
              <RelatedBlogs theme={theme} list={dummyRelatedBlogsData} />
            </main>
          );
        }}
      />
    </>
  );
};

export default Post;

type Params = {
  params: {
    data: string;
  };
};

export async function getStaticProps(path: Params) {
  const data = await fetchSingleBlog(path.params.data);
  data._id = data._id?.toHexString() as any;
  return {
    props: { data: data },
  };
}

export async function getStaticPaths() {
  const pathData = await fetchPathData();
  return {
    paths: pathData.map((path) => ({
      params: {
        data: path,
      },
    })),
    fallback: false,
  };
}
