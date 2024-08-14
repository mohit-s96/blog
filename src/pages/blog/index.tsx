import Layout from "../../components/layout";
import Cards from "../../components/main-blog-cards/Cards";
import SearchBlogs from "../../components/search-blogs/search";
import { BlogListType } from "../../../types/blogtypes";
import { fetchBlogList } from "../../../lib/database/getBlogs";
import CustomHead from "../../components/head";
import Footer from "../../components/footer/footer";

type Props = {
  posts: BlogListType[];
};

const Index = ({ posts }: Props) => {
  return (
    <>
      <CustomHead
        uri="https://mohits.dev/blog"
        description="This page contains all the articles present on this website."
        title="All Blogs"
        image="https://mohits.dev/favicon/favicon.png"
      />
      <Layout
        render={(theme, searchVisible, setSearchVisible) => {
          return (
            <>
              <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto h-[92vh] flex flex-col justify-between">
                {searchVisible ? (
                  <SearchBlogs
                    theme={theme}
                    visible={searchVisible}
                    setVisible={setSearchVisible}
                  />
                ) : null}
                <Cards data={posts} theme={theme} />
                <div className="mt-8">
                  <Footer theme={theme} />
                </div>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const data = await fetchBlogList();

  let promises: Promise<any>[] = [];

  data.forEach((x) => {
    const lowresuri = x.images!.find((x) => x.isHero)!.permUri[3].data!.Key;
    promises.push(fetch(lowresuri));
    x!._id = x._id?.toHexString() as any;
  });

  const resp = await Promise.all(promises);

  promises = [];

  resp.forEach((res) => {
    promises.push(res.arrayBuffer());
  });

  const base64Strings = await Promise.all(promises);

  data.forEach((blog, i) => {
    const buffer = Buffer.from(base64Strings[i]);
    blog.lowres = "data:image/webp;base64, " + buffer.toString("base64");
  });
  return {
    props: { posts: data },
  };
};
