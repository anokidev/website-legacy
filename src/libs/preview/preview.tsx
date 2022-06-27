/*

  ./src/libs/preview/preview.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the preview component.

*/

// React.
import react, { ReactElement } from "react";

// Next.
import Image from "next/image";
import Link from "next/link";

// SCSS.
import styles from "@styles/preview/preview.module.scss";

// Props interface.
interface Props {
  src: string,
  alt: string,
  text: string,
  title: string,
  goto: string
};

class Preview extends react.Component<Props, {}> {

  render(): ReactElement {

    // Props.
    const src: string  = this.props.src;
    const alt: string  = this.props.alt;
    const text: string = this.props.text;
    const title: string = this.props.title;
    const goto: string = this.props.goto;

    return (
    
      <div className={styles.previewContainer}>

        {/* Image */}
        <div className={styles.imageContainer}>
          <Image src={src} alt={alt} width="500" height="300"/>
        </div>

        {/* Description */}
        <div className={styles.descContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div className={styles.buttonContainer}>
                  <p>Read More</p>
            </div>
        </div>

      </div>

    );

  };

};

export default Preview;