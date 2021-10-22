import { fetchPathData, fetchSingleBlog } from "../../../lib/database/getBlogs";
import { BlogSlug } from "../../../types/blogtypes";
import Layout from "../../components/layout";
import MainBlog from "../../components/main-blog/mainBlog";
import RelatedBlogs from "../../components/related-bar/relatedBlogs";
import StatsBar from "../../components/statsbar/statsBar";

type Props = {
  data: BlogSlug;
};

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
}: Props) => {
  return (
    <Layout
      render={(theme) => {
        return (
          <main
            className={`${
              theme === "dark" ? "bg-primary-bg-dark" : "bg-primary-bg-light"
            } grid grid-cols-12`}
          >
            <StatsBar
              stats={{ commentCount, likes, viewCount, uri, title }}
              theme={theme}
            />
            <MainBlog />
            <RelatedBlogs />
          </main>
        );
      }}
    />
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
