/*

  ./src/pages/home/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the home page.

*/

// Node.
import fs from 'fs';
import path from 'path';

// React.
import react, { ReactElement } from "react";

// Next.
import Head from "next/head";
import Link from "next/link";

// Graymatter.
import matter from "gray-matter";

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Preview from "@libs/preview/preview";
import Slideshow from "@libs/slideshow/slideshow";
import Blog from "@libs/blog/blog";

// SCSS.
import styles from "@styles/page/page.module.scss";

// Props.
interface Props {
  projects: string[];
  blogs:    string[];
};

class Home extends react.Component<Props, {}> {

  render(): ReactElement {

    /* INTRO */

    const previewTitle: string = "Welcome to my website!";

    const previewText: string = "Welcome to my personal website. My name is Anoki Youssou Fauzan Tanuel, also known as Anokidev. I am a 14 years old kid that is learning how to code. I am currently focusing on web development, but I am planning to learn more about low level programming such as C, assembly, and C++ plus hot new technologies such as Go, Rust, and Zig. You can click the 'Read More' button to read more about me!";

    const srcGallery: string[] = [
      '/images/home/1.png', 
      '/images/home/2.png'
    ];

    const altGallery: string[] = [
      'xfce4-rice-1', 
      'xfce4-rice-2'
    ];

    const titleGallery: string[] = [
      'Manjaro XFCE4 Rice', 
      'Another Manjaro XFCE4 Rice'
    ];

    const textGallery: string[] = [
      'Manjaro Linux with riced XFCE4, running several terminal or Text User Interface (TUI) apps such as Neofetch, Htop, and Tmux.',
      'Another screenshot of riced Manjaro Linux, running Cava, GNU Nano, and riced Neovim with Powerline Airline plugin, NERDTree plugin, OneDarkPro theme, and COC auto-completion language server.'
    ];

    /* PROJECTS */

    // Generate projects list.
    const projectItems: any[] = [];

    if (this.props.projects.length == 0) {

      projectItems.push(
        <p>So far none!</p>
      );

    } else {

      this.props.projects.forEach((notParsedProject) => {

        const project = matter(notParsedProject);
  
        projectItems.push(
          <Preview src={project.data.imageSrc} alt={project.data.imageAlt} text={project.data.desc} title={project.data.title} goto={project.data.goto} />
        );
  
      });

    };

    /* BLOGS */

    // Generate blogs list.
    const blogItems: any[] = [];

    if (this.props.blogs.length == 0) {

      blogItems.push(
        <p>So far none!</p>
      );

    } else {

      this.props.blogs.forEach((notParsedBlog) => {

        const blogs = matter(notParsedBlog);
  
        blogItems.push(
          <Blog src={blogs.data.imageSrc} alt={blogs.data.imageAlt} text={blogs.data.desc} title={blogs.data.title} goto={blogs.data.goto} released={blogs.data.released} modified={blogs.data.modified}/>
        );
  
      });

    };

    return (

      <>

        {/* Head */}
        <Head>
          <title>Home | Anokidev</title>
        </Head>

        {/* Header */}
        <Header/>

        {/* Body */}
        <div className={styles.pageContainer}>

          <div className={styles.headingContainer}>
            <h1>Home</h1>
            <p>Welcome to my website! You are free to explore my website. I use this website as a blogging, a personal, and a portofolio website. This website is <a href="https://www.github.com/anokidev/website">open source</a>. So I am part of the open-source movement, right?</p>
          </div>

          <Preview src="/images/home/1.png" alt="a" text={previewText} title={previewTitle} goto="https://anokidev.netlify.app/about"/>

          <div className={styles.headingContainer}>
            <h1>Intro</h1>
            <p>A little bit of introduction.</p>
          </div>

          <p>
            Hello there everyone, and welcome to my personal plus blogging website! This website is built on top of Next.js (A Javascript React framework), React (A frontend UI library), SCSS (CSS but sassy plus better), and Typescript (Javascript but strongly and statically typed). This website is meant to be a personal blog website, a portofolio website, and a website where I publish my projects and opinions in a form of an internet blog post.
          </p>

          <p>
            Anyway, welcome! You are free to explore this website. You can use the navigation bar above (navbar) to view my projects by clicking &#39;Projects&#39;, my blogs by clicking &#39;Blogs&#39;, and my about page by clicking &#39;About&#39;. You can view my Github account by clicking the Github logo in the Navbar. Enjoy, keep calm, and happy coding!
          </p>

          <div className={styles.headingContainer}>
            <h1>Gallery</h1>
            <p>Some nice photos for showcase purpose.</p>
          </div>

          <Slideshow src={srcGallery} alt={altGallery} title={titleGallery} text={textGallery}/>
          
          <div className={styles.headingContainer}>
            <h1>Projects</h1>
            <p>Since I am a developer, I also started some projects, most of them are abandoned, but I am focusing on Python projects right now.You can find more by clicking the &apos;More&apos; button.</p>
          </div>

          {projectItems}

          <div className={styles.centerContainer}>
            <Link href="/projects">
              <div className={styles.buttonContainer}>
                <p>More</p>
              </div>
            </Link>
          </div>

          <div className={styles.headingContainer}>
            <h1>Blogs</h1>
            <p>This is where I post silly rants, basic tutorials, and some controversial opinions.</p>
          </div>

          {blogItems}

          <div className={styles.centerContainer}>
            <Link href="/blogs">
              <div className={styles.buttonContainer}>
                <p>More</p>
              </div>
            </Link>
          </div>

        </div>

        {/* Footer */}
        <Footer/>

      </>

    )
  };

};

// Get the project and the blog contents.
export async function getServerSideProps() {

  /* PROJECTS */

  // Get the path.
  const projectDirectory: string = "public/content/projects/";

  // List all directories.
  const projectFiles: string[] = fs.readdirSync(projectDirectory, 'utf8');

  const projects: string[] = [];

  projectFiles.forEach((file) => {

    projects.push(
      fs.readFileSync(
        path.join(projectDirectory, file), 
        {encoding:'utf8', flag:'r'}
      )
    );

  });

  /* BLOGS */

  // Get the path.
  const blogDirectory: string = "public/content/blogs/";

  // List all directories.
  const blogFiles: string[] = fs.readdirSync(blogDirectory, 'utf8');

  const blogs: string[] = [];

  blogFiles.forEach((file) => {

    blogs.push(
      fs.readFileSync(
        path.join(blogDirectory, file), 
        {encoding:'utf8', flag:'r'}
      )
    );

  });

  // Pass data to the page via props.
  return { props: { projects, blogs } };
  
};

export default Home;
