/*

  ./src/pages/blogs/[id].tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the blogs IDs page.

*/

// Node.
import fs from 'fs';
import path from 'path';

// React.
import react, { ReactElement } from "react";

// Next.
import Head from 'next/head';

// Graymatter.
import matter from "gray-matter";

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Md from "@libs/md/md";

// SCSS.
import styles from "@styles/page/page.module.scss";

interface Props {
  text: string;
};

class BlogContent extends react.Component<Props, {}> {

  // Render.
  render(): ReactElement {

    // Get the project content.
    const md: any = matter(this.props.text);

    return (

      <>

        {/* Head */}
        <Head>
          <title>{md.data.title} - Blogs | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <h1>{md.data.title}</h1>
          <p>Released: {md.data.released}</p>
          <p>Last modified: {md.data.modified}</p>
          <hr style={{margin: 0}}></hr>
          <Md text={md.content}/>
        </div>

        {/* Footer */}
        <Footer/>

      </>

    );

  };


};

// Get the projects content that is stored in contents directory.
export function getServerSideProps(context: any) {

  // ID.
  const { id } = context.query;

  // Get the path.
  const projectDirectory: string = "public/content/blogs/";

  // List all files.
  const files: string[] = fs.readdirSync(projectDirectory, 'utf8');

  let text: string = "";

  // Get and read the content file.
  files.forEach((file) => {

    if (file == `${id}.md`) {

      text = fs.readFileSync(
        path.join(projectDirectory, file), 
        {encoding:'utf8', flag:'r'}
      );

    };

  });

  // Pass data to the page via props.
  return { props: { text } };
  
};

export default BlogContent;