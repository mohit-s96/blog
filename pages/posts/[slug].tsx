import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  fetchBlogs,
  fetchSingleBlog,
  fetchComments,
  fetchPathData,
} from "../../lib/getBlogs";
import { addBlog, addComment } from "../../lib/updateBlogData";
import { BlogSlug } from "../../types/blogtypes";

type Props = {
  slug: BlogSlug;
};

const Post = ({ slug: { author, excerpt, likes, commentCount } }: Props) => {
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
    slug: string;
  };
};

export async function getStaticProps(x: Params) {
  const data = await fetchSingleBlog("figma_design");
  (data._id as any) = data._id.toHexString();
  return {
    props: { slug: data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "1",
        },
      },
      {
        params: {
          slug: "2",
        },
      },
    ],
    fallback: false,
  };
}
