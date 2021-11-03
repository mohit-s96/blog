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
      <title>Mohit's Blog</title>
      <link rel="canonical" href={uri} />
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
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
