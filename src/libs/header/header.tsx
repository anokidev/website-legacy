/*

  ./src/libs/header/header.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as a header component.

*/

// React.
import react, { ReactElement } from "react";

// Next.
import Image from "next/image";
import Link from "next/link";

// FontAwesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// SCSS.
import styles from "@styles/header/header.module.scss";

// State interface.
interface State {
  opened:    boolean;
  component: ReactElement;
};

// Header.
class Header extends react.Component<{}, State> {

  constructor(props: any) {

      super(props);

      // Set initial state.
      this.state = {
          opened:    false,
          component: <></>
      }; 
        
      // Binding openMobileMenu.
      this.openMobileMenu = this.openMobileMenu.bind(this);

  };

  // Toggle mobile menu.
  openMobileMenu(): void { 

    // Mobile menu.
    const MobileMenuListOpened = (): ReactElement => {

      // Mobile menu.
      return (
          
        <div className={styles.mobileMenuContainerOpened}>
          <ul>

            {/* Menu */}
            <li className={styles.mobileMenuWrapper}><Link href="/home">Home</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/projects">Projects</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/blogs">Blogs</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/about">About</Link></li>

            {/* Github, etc */}
            <li className={styles.mobileLinksWrapper}>
              <ul>
                <li><a href="https://www.github.com/anokidev">
                  <FontAwesomeIcon icon={faGithub} style={{color : 'white' , height : '5vw'}}/>
                </a></li>
              </ul>
            </li>
						
          </ul>
        </div>

      );

    };

    // Mobile menu.
    const MobileMenuListClosed = (): ReactElement => {

      // Mobile menu.
      return (
          
        <div className={styles.mobileMenuContainerClosed}>
          <ul>

            {/* Menu */}
            <li className={styles.mobileMenuWrapper}><Link href="/home">Home</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/projects">Projects</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/blogs">Blogs</Link></li>
            <li className={styles.mobileMenuWrapper}><Link href="/about">About</Link></li>

            {/* Github, etc */}
            <li className={styles.mobileLinksWrapper}>
              <ul>
                <li><a href="https://www.github.com/anokidev">
                  <FontAwesomeIcon icon={faGithub} style={{color : 'white' , height : '5vw'}}/>
                </a></li>
              </ul>
            </li>
						
          </ul>
        </div>

      );

    };

    if (this.state.opened == false) {
        // Open mobile menu.
        this.setState({
            opened: true,
            component: <MobileMenuListOpened />
        });
    } else {
      // Close mobile menu.
      this.setState({
          opened: false,
          component: <MobileMenuListClosed />
      });
    };

  }; 

	// Render.
  render(): ReactElement {

		// Content.
    return (

      <>
		
        <div className={styles.headerContainer}>
			
          {/* Navbar */}
          <div className={styles.navbarContainer}>

            {/* Left Container */}
            <div className={styles.menuContainer}>

              {/* Image Container */}
              <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                      <Image alt="logo" src="/images/navbar/logo.png" width="40" height="40"/>
                  </div>
              </div>

            </div>

            {/* Middle Container */}
            <div className={styles.menuContainer}>

              {/* Desktop Menu */}
              <div className={styles.desktopMenuContainer}>
                  <ul>
                      <li><Link href="/home">Home</Link></li>
                      <li><Link href="/projects">Projects</Link></li>
                      <li><Link href="/blogs">Blogs</Link></li>
                      <li><Link href="/about">About</Link></li>
                  </ul>
              </div>

            </div>

            {/* Right Container */}
            <div className={styles.menuContainer}>

              {/* Github Menu */}
              <div className={styles.desktopMenuContainer}>
                <ul>
                  <li>
                      <a href="https://www.github.com/anokidev">
                        <FontAwesomeIcon icon={faGithub} style={{color : 'white' , height : '2vw'}}/>
                      </a>
                    </li>
                </ul>
              </div>

            {/* Toggle Menu */}
            <div className={styles.mobileToggle} onClick={this.openMobileMenu}>
                <><FontAwesomeIcon icon={faBars} style={{color : 'white' , height : '50%',  paddingTop: '55%'}}/></>
            </div>
						
            </div>

          </div>
				
        </div>

        {/* Mobile Menu */}
        <>{this.state.component}</>

      </>

    );

  };

};

export default Header;