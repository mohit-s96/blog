import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {
  title: string;
  uri: string;
  description: string;
  image: string;
}

function CustomHead({ uri, description, image, title }: Props): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/favicon/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="32x32"
        href="/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="16x16"
        href="/favicon/favicon.svg"
      />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/icon-192x192.png"
        color="#000000rgb(106, 39, 159)"
      />
      <link rel="shortcut icon" href="/favicon/favicon.svg" />
      <meta name="msapplication-TileColor" content="rgb(106, 39, 159)" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="rgb(106, 39, 159)" />
      <link rel="canonical" href={uri} />
      <link rel="icon" href="/favicon/favicon.svg" type="image/svg" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={uri} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={uri} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default CustomHead;
