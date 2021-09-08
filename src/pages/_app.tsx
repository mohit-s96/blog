import { AppProps } from "next/app";
import Head from "next/head";
import "../../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}
