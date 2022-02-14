import Layout from "../components/layout";
import Cards from "../components/main-blog-cards/Cards";
import SearchBlogs from "../components/search-blogs/search";
import { BlogListType } from "../../types/blogtypes";
import { fetchBlogList } from "../../lib/database/getBlogs";
import CustomHead from "../components/head";
import Heromain from "../components/hero/heromain";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";

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
        image="https://mohits.dev/favicon/favicon.png"
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
  data.forEach((x) => {
    x!._id = x._id?.toHexString() as any;
  });
  return {
    props: { posts: data },
  };
};
