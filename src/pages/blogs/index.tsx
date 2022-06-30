/*

  ./src/pages/blogs/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the blogs page.

*/

// Node.
import fs from 'fs';
import path from 'path';

// React.
import react, { ReactElement } from "react";

// Next head.
import Head from 'next/head';

// Graymatter.
import matter from "gray-matter";

// Header and footer.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Blog from "@libs/blog/blog";

// SCSS.
import styles from "@styles/page/page.module.scss";

interface Props {
  text: string[];
};

// Page.
class Blogs extends react.Component<Props, {}> {

  // Render.
  render(): ReactElement {

    // Generate projects list.
    const blogItems: any[] = [];

    if (this.props.text.length == 0) {

      blogItems.push(
        <p>So far none!</p>
      );

    } else {

      this.props.text.forEach((notParsedProject) => {

        const project = matter(notParsedProject);
  
        blogItems.push(
          <Blog src={project.data.imageSrc} alt={project.data.imageAlt} text={project.data.desc} title={project.data.title} goto={project.data.goto} released={project.data.released} modified={project.data.modified}/>
        );
  
      });

    };

    return (

      <>

        {/* Head */}
        <Head>
          <title>Blogs | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <h1>Blogs</h1>
            <p>Sometimes I rant about something, sometimes I explore something, sometimes I teach something. This is my blog, where you can find my blog articles.</p>
          </div>
          {blogItems}
        </div>

        {/* Footer */}
        <Footer/>

      </>

    );

  };

};

// Get the projects content via Supabase PostgreSQL REST API.
export function getServerSideProps() {

  // Get the path.
  const blogDirectory: string = "public/content/blogs/";

  // List all directories.
  const files: string[] = fs.readdirSync(blogDirectory, 'utf8');

  const text: string[] = [];

  files.forEach((file) => {

    text.push(
      fs.readFileSync(
        path.join(blogDirectory, file), 
        {encoding:'utf8', flag:'r'}
      )
    );

  });

  // Pass data to the page via props.
  return { props: { text } };
  
};

export default Blogs;
