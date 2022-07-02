/*

  ./src/pages/projects/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the projects page.

*/

// Node.
import fs from 'fs';
import path from 'path';

// React.
import react, { ReactElement } from "react";

// Next head.
import Head from "next/head";

// Graymatter.
import matter from "gray-matter";

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Preview from "@libs/preview/preview";

// SCSS.
import styles from "@styles/page/page.module.scss";

interface Props {
  text: string[];
};

// Page.
class Projects extends react.Component<Props, {}> {

  // Render.
  render(): ReactElement {

    // Generate projects list.
    const projectItems: any[] = [];

    if (this.props.text.length == 0) {

      projectItems.push(
        <p>So far none!</p>
      );

    } else {

      this.props.text.forEach((notParsedProject) => {

        const project = matter(notParsedProject);
  
        projectItems.push(
          <Preview src={project.data.imageSrc} alt={project.data.imageAlt} text={project.data.desc} title={project.data.title} goto={project.data.goto} />
        );
  
      });

    };

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
          <div className={styles.headingContainer}>
            <h1>Projects</h1>
            <p>THis is where you can view my current active projects. I write programs in Javascript, Typescript, and Python. I also use several frameworks such as Svelte, React, Angular, and Next.js.</p>
          </div>
          {projectItems}
        </div>

        {/* Footer */}
        <Footer/>

      </>

    );

  };

};

// Get the project contents.
export async function getServerSideProps() {

  // Get the path.
  const projectDirectory: string = "public/content/projects/";

  // List all directories.
  const files: string[] = fs.readdirSync(projectDirectory, 'utf8');

  const text: string[] = [];

  files.forEach((file) => {

    text.push(
      fs.readFileSync(
        path.join(projectDirectory, file), 
        {encoding:'utf8', flag:'r'}
      )
    );

  });

  // Pass data to the page via props.
  return { props: { text } };
  
};

export default Projects;