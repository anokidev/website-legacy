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

  // Include some meta tags and links.
  return (

    <>

      {/* Head */}
      <Head>

      {/* Description Meta Tag */}
      <meta name="author" content="anokidev" />
      <meta name="description" content="The official blog of anokidev" />
      <meta name="keywords" content="anokidev, dev, developers, programming, hobby, coding, tech" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Google Site Verification, Do Not Remove! */}
      <meta name="google-site-verification" content="_rbPFDCndSfOEcJyXTyWQixO4xB1Tn0cSFAZv1oNpM8" />

      {/* Favicon */}
      <link rel="icon" href="favicon.png" />

      </Head>

      {/* Page */}
      <Component {...pageProps} />

    </>

  );

};

export default MyApp;
