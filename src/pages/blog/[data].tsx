import {
  fetchPathData,
  fetchSearchQuery,
  fetchSingleBlog,
} from "../../../lib/database/getBlogs";
import SearchBlogs from "../../components/search-blogs/search";
import { BlogSlug, RelatedBlogsType } from "../../../types/blogtypes";
import CustomHead from "../../components/head";
import Layout from "../../components/layout";
import MainBlog from "../../components/main-blog/mainBlog";
import RelatedBlogs from "../../components/related-bar/relatedBlogs";
import StatsBar from "../../components/statsbar/statsBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import CommentsProvider from "../../components/comments/provider";

type Props = {
  data: BlogSlug;
  relatedBlogs: Partial<BlogSlug>[];
};

const Post = ({
  data: { excerpt, commentCount, images, likes, title, uri, viewCount },
  data,
  relatedBlogs,
}: Props) => {
  const router = useRouter();
  useEffect(() => {
    import("prismjs").then(() => {
      //@ts-ignore
      Prism.highlightAll();
      // this is a hack. TODO: find better ways to fix this this. problem is that Prism.highlightAll
      // runs before the page is rendered so it highlights nothing.
      setTimeout(() => {
        //@ts-ignore
        Prism.highlightAll();
      }, 2000);
    });
  }, [router]);
  return (
    <>
      <CustomHead
        uri={`https://mohits.dev/blog/${uri}`}
        description={excerpt}
        title={title}
        image={images[0].permUri[2].data!.Key}
        children={
          <link
            //@ts-ignore
            crossOrigin
            rel="preconnect"
            href={
              process.env.NODE_ENV === "development"
                ? "http://localhost:5001"
                : "https://api.mohits.dev"
            }
          />
        }
      />
      <Layout
        render={(theme, searchVisible, setSearchVisible) => {
          return (
            <>
              <StatsBar
                stats={{ commentCount, likes, viewCount, uri, title }}
                theme={theme}
              />
              <section
                className={`flex flex-col items-center 2xl:w-10/12 w-full mx-auto dark:bg-primary-bg-dark bg-white`}
              >
                {searchVisible ? (
                  <SearchBlogs
                    theme={theme}
                    visible={searchVisible}
                    setVisible={setSearchVisible}
                  />
                ) : null}
                <MainBlog theme={theme} data={data} />
                <CommentsProvider key={router.asPath} />
              </section>
              <RelatedBlogs theme={theme} list={relatedBlogs} />
              <Footer theme={theme} />
            </>
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
  const relatedSearchQuery = data.tags.join(" ");
  let relatedBlogs = await fetchSearchQuery(relatedSearchQuery);

  let promises: Promise<any>[] = [];

  relatedBlogs.forEach((blog) => {
    const lowresuri = blog.images!.find((x) => x.isHero)!.permUri[3].data!.Key;
    promises.push(fetch(lowresuri));
    blog._id = blog._id?.toHexString() as any;
  });

  const resp = await Promise.all(promises);

  promises = [];

  resp.forEach((res) => {
    promises.push(res.arrayBuffer());
  });

  const base64Strings = await Promise.all(promises);

  relatedBlogs.forEach((blog, i) => {
    const buffer = Buffer.from(base64Strings[i]);
    blog.lowres = "data:image/webp;base64, " + buffer.toString("base64");
  });

  const lowResImageData = await fetch(
    data.images.find((x) => x.isHero)!.permUri[3].data!.Key
  );
  const blob = await lowResImageData.arrayBuffer();
  const buffer = Buffer.from(blob);
  const text = buffer.toString("base64");

  data.lowres = "data:image/webp;base64, " + text;

  data._id = data._id?.toHexString() as any;

  relatedBlogs = relatedBlogs.filter((blog) => blog._id !== data._id);
  const props = {
    data,
    relatedBlogs,
  };
  return {
    props,
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
