type Props = {
  posts: [number];
};

const Index = ({}: Props) => {
  return (
    <>
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
