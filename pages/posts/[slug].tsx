import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  fetchBlogs,
  fetchSingleBlog,
  fetchComments,
  fetchPathData,
} from "../../lib/getBlogs";
import { addBlog, addComment } from "../../lib/updateBlogData";

type Props = {
  str: string;
};

const Post = ({}: Props) => {
  const router = useRouter();
  // if (!router.isFallback /*&& !post?.slug*/) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return <div>Some blog page</div>;
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps(x: Params) {
  // const data = await fetchComments("61360f8909f47f1c62bb188a");
  // console.log(data);
  // let y = await addComment();
  // console.log(y);

  return {
    props: { str: "hello" },
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
