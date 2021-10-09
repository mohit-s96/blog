import { useRouter } from "next/router";
import ErrorPage from "next/error";
import blogData from "../../../data.json";
import {
  fetchBlogs,
  fetchSingleBlog,
  fetchComments,
  fetchPathData,
} from "../../../lib/getBlogs";
import { addBlog, addComment } from "../../../lib/updateBlogData";
import { BlogSlug } from "../../../types/blogtypes";

type Props = {
  data: BlogSlug;
};
// gets blog from the api
const Post = ({ data: { author, excerpt, likes, commentCount } }: Props) => {
  const router = useRouter();
  // if (!router.isFallback /*&& !post?.slug*/) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <div className="text-center grid place-items-center p-4">
      <h1 className="p-3">
        <b>Author:</b>
      </h1>
      <p className="p-3 mb-2 text-blue-700">{author}</p>
      <h1 className="p-3">
        <b>Excerpt:</b>
      </h1>
      <p className="p-3 mb-2 text-blue-700 w-7/12">{excerpt}</p>
      <h1 className="p-3">
        <b>Likes:</b>
      </h1>
      <p className="p-3 mb-2 text-blue-700">{likes}</p>
      <h1 className="p-3">
        <b>Comments:</b>
      </h1>
      <p className="p-3 mb-2 text-blue-700">{commentCount}</p>
    </div>
  );
};

export default Post;

type Params = {
  params: {
    data: string;
  };
};

export async function getStaticProps(_path: Params) {
  const data = (blogData[1] as unknown) as BlogSlug;
  // (data._id as any) = data._id.toHexString();
  return {
    props: { data: data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          data: "1",
        },
      },
      {
        params: {
          data: "2",
        },
      },
    ],
    fallback: false,
  };
}
