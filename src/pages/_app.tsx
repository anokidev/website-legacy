/*

  ./src/pages/_app.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the main point to the app.

*/

// React.
import { ReactElement } from 'react';

// Next.
import Head from 'next/head';
import type { AppProps } from 'next/app';

// SCSS.
import '@styles/globals/globals.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {

  return (
    <>
      <Head>
      <meta name="author" content="anokidev" />
      <meta name="description" content="The official blog of anokidev" />
      <meta name="keywords" content="anokidev, dev, developers, programming, hobby, coding, tech" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="google-site-verification" content="wFKHRg78m9HpD5aHjzhhP4uqkPEp3icUurOWtIYLwE8" />
      <link rel="icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );

}

export default MyApp;
