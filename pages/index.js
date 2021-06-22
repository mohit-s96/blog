import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohit's Blog</title>
        <link rel="canonical" href="https://mohits.dev/" />
        <meta name="title" content="Mohit's Blog" />
        <meta
          name="description"
          content="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and some C++"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohit's Blog" />
        <meta property="og:url" content="https://mohits.dev/" />
        <meta property="og:title" content="Mohit's Blog" />
        <meta
          property="og:description"
          content="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and some C++"
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

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Blog!</h1>
        <p className={styles.description}>W.I.P.</p>
        <a
          href="https://github.com/msx47/blog"
          target="_blank"
          referrerPolicy="no-referrer"
          className={styles.link}
        >
          Github
        </a>
      </main>
    </div>
  );
}
