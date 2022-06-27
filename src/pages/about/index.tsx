/*

  ./src/pages/about/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the about page.

*/

// Node.
import fs from 'fs';
import path from 'path';

// React.
import react, { ReactElement } from "react";

// Next.
import Head from 'next/head';

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Md from "@libs/md/md";
import UnderConstruction from "@libs/under-construction/under-construction";

// SCSS.
import styles from "@styles/page/page.module.scss";

// State interface.
interface Props {
  data: string
};

// Page.
class About extends react.Component<Props, {}> {

  // Render.
  render(): ReactElement {

    // Content.
    return (

      <>

        {/* Head */}
        <Head>
          <title>About | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <UnderConstruction />
          <Md text={this.props.data}/>
        </div>

        {/* Footer */}
        <Footer/>

      </>

    )

  };

};

// Read about.md
export async function getServerSideProps() {

  // Get the path, then read.
  const contentDirectory: string = path.join(process.cwd(), 'content/about');
  const fullPath: string = path.join(contentDirectory, 'about.md');
  const data: string = fs.readFileSync(fullPath, 'utf8');

  // Pass data to the page via props.
  return { props: { data } };
  
};

export default About;