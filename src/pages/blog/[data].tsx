import { fetchPathData, fetchSingleBlog } from "../../../lib/database/getBlogs";
import { BlogSlug } from "../../../types/blogtypes";

type Props = {
  data: BlogSlug;
};

const Post = ({
  data: { author, excerpt, likes, commentCount, title },
}: Props) => {
  // const router = useRouter();
  // if (!router.isFallback /*&& !post?.slug*/) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <div className="text-center grid place-items-center p-4">
      <h1 className="p-3">
        <b>Title:</b>
      </h1>
      <p className="p-3 mb-2 text-blue-700">{title}</p>
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
