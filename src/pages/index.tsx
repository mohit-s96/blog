import Layout from "../components/layout";
import Cards from "../components/main-blog-cards/Cards";
// import SearchBlogs from "../components/search-blogs/search";
import { BlogListType } from "../../types/blogtypes";
import { fetchBlogList } from "../../lib/database/getBlogs";
import CustomHead from "../components/head";
import Heromain from "../components/hero/heromain";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";
import dynamic from "next/dynamic";

const SearchBlogs = dynamic(() => import("../components/search-blogs/search"));

type Props = {
  posts: BlogListType[];
};

const Index = ({ posts }: Props) => {
  return (
    <>
      <CustomHead
        uri="https://mohits.dev/"
        description="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
        title="Mohit's Blog"
        image="https://mohits.dev/assets/logo.svg"
      />
      <Layout
        render={(theme, searchVisible, setSearchVisible) => {
          return (
            <>
              <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto">
                {searchVisible ? (
                  <SearchBlogs
                    theme={theme}
                    visible={searchVisible}
                    setVisible={setSearchVisible}
                  />
                ) : null}
                <Heromain />
                <Cards data={posts} theme={theme} />
                <Projects />
              </div>
              <div className="mt-16">
                <Footer theme={theme} />
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
