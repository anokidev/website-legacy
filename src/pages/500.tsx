/*

  ./src/pages/500.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the 500 page.

*/

// React.
import react, { ReactElement } from "react";

// Next head.
import Head from "next/head";
import Link from "next/link";

// SCSS.
import styles from "@styles/page/page.module.scss";

// Page.
class Custom500Page extends react.Component {

  // Render.
  render(): ReactElement {

    return (

      <>

        {/* Head */}
        <Head>
          <title>500 - Internal Server Error | Anokidev</title>
        </Head>

        {/* Body */}
        <div className={styles.pageContainer}>
          <h1>An error has occurred.</h1>
          <h3>500: Internal server error.</h3>
          <p>This is caused by an internal server error. Only the administrator can fix this error.</p>
          <div className={styles.buttonContainer}>
            <Link href="/home"> Go Back to Home</Link>
          </div>
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

export default Custom500Page;