/*

  ./src/pages/404.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the 404 page.

*/

// React.
import react, { ReactElement } from "react";

// Next head.
import Head from 'next/head';

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";

// SCSS.
import styles from "@styles/page/page.module.scss";

// Page.
class Custom404Page extends react.Component {

  // Render.
  render(): ReactElement {

    return (

      <>

        {/* Head */}
        <Head>
          <title>404 Not Found | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <h1 style={{fontSize: '575%'}}>:(</h1>
          <h1>An error has occurred.</h1>
          <h3>404: Not found.</h3>
          <p>This is caused because the link you just typed is broken. Either the page does not exist, moved temporarily, or moved permanently. Please check that the link that you just typed doesn&apos;t have a typo.</p>
          <br></br>
          <br></br>
          <br></br>
        </div>

        {/* Footer */}
        <Footer/>

      </>

    )

  };

};

export default Custom404Page;