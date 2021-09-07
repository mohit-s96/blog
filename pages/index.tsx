import Head from "next/head";
type Props = {
  posts: [number];
};

const Index = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Mohit's Blog</title>
        <link rel="canonical" href="https://mohits.dev/" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <meta name="title" content="Mohit's Blog" />
        <meta
          name="description"
          content="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohit's Blog" />
        <meta property="og:url" content="https://mohits.dev/" />
        <meta property="og:title" content="Mohit's Blog" />
        <meta
          property="og:description"
          content="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/17087942?v=4"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://mohits.dev/" />
        <meta property="twitter:title" content="Mohit's Blog" />
        <meta
          property="twitter:description"
          content="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and some C++"
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/17087942?v=4"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          minHeight: "98vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="text-center text-6xl">WIP</h1>
        <p className="text-center">
          <a
            className="text-blue-700 font-extrabold"
            href="https://github.com/msx47/blog"
            target="_blank"
          >
            View on github
          </a>
        </p>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: { posts: [5] },
  };
};
