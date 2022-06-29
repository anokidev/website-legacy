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

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";

// SCSS.
import styles from "@styles/page/page.module.scss";

// Page.
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

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <h1 style={{fontSize: '575%'}}>:(</h1>
          <h1>An error has occurred.</h1>
          <h3>500: Internal Server Error</h3>
          <p>This is caused by an internal server error that occured between the frontend and the backend. This is not your fault, this is the website&apos;s fault. Usually caused by backend errors. Only the admin of this website can fix this error.</p>
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

export default Custom500Page;