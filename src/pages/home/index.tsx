/*

  ./src/pages/home/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the home page.

*/

// React.
import react, { ReactElement } from "react";

// Next.
import Head from 'next/head';

// Libs.
import Header from "@libs/header/header";
import Footer from "@libs/footer/footer";
import Preview from "@libs/preview/preview";
import Slideshow from "@libs/slideshow/slideshow";

// SCSS.
import styles from "@styles/page/page.module.scss"

class Home extends react.Component {

  render(): ReactElement {

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

          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <h1>Home</h1>
            <p>Welcome to my website! You are free to explore my website. I use this website as a blogging, a personal, and a portofolio website. This website is <a href="https://www.github.com/anokidev/website">open source</a>. So I am part of the open-source movement, right?</p>
          </div>

          <Preview src="/images/home/1.png" alt="a" text={previewText} title={previewTitle} goto="https://anokidev.netlify.app/about"/>

          <h1>Intro</h1>

          <p>
            This is my website <b>(Still under construction)</b>. Built on top of Next.js (A Javascript React framework), React (A frontend UI library), SCSS (CSS but sassy plus better), and Typescript (Javascript but strongly and statically typed). This website is meant to be a personal blog website, a portofolio website, and a website where I publish my projects and opinions in a form of an internet blog post.
          </p>

          <p>
            Anyway, welcome! You are free to explore this website. You can use the navigation bar above (navbar) to view my projects by clicking &#39;Projects&#39;, my blogs by clicking &#39;Blogs&#39;, and my about page by clicking &#39;About&#39;. You can view my Github account by clicking the Github logo in the Navbar. Enjoy, keep calm, and happy coding!
          </p>

          <h1>Gallery</h1>

          <Slideshow src={srcGallery} alt={altGallery} title={titleGallery} text={textGallery}/>

        </div>

        {/* Footer */}
        <Footer/>

      </>

    )
  };

};

export default Home;
