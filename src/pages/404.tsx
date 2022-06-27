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
          <title>Projects | Anokidev</title>
        </Head>

        {/* Body */}
        <div className={styles.pageContainer}>
          <h1>An error has occurred.</h1>
          <h3>404: Not found.</h3>
          <p>This is caused because the link you just typed is broken. Either the page does not exist, moved temporarily, or moved permanently.</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

      </>

    )

  };

};

export default Custom404Page;