/*

  ./src/pages/projects/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the projects page.

*/

// React.
import react, { ReactElement } from "react";

// Next head.
import Head from 'next/head';

// Header and footer.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import UnderConstruction from "@libs/under-construction/under-construction";

// SCSS.
import styles from "@styles/page/page.module.scss";

// Page.
class Projects extends react.Component {

  // Render.
  render(): ReactElement {

    return (

      <>

        {/* Head */}
        <Head>
          <title>Projects | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <UnderConstruction />
          <h1>Projects</h1>
          <p>Coming soon!</p>
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
          <br></br>
        </div>

        {/* Footer */}
        <Footer/>

      </>

    )

  };

};

export default Projects;