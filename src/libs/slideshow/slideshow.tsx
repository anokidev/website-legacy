/*

  ./src/libs/slideshow/slideshow.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the slideshow component.

*/

// React.
import react, { ReactElement } from "react";

// Next.
import Image from "next/image";

// SCSS.
import styles from "@styles/slideshow/slideshow.module.scss";

// Props interface.
interface Props {
  src:   string[];
  alt:   string[];
  text:  string[];
  title: string[];
};

// Props interface.
interface States {
  src:   string;
  alt:   string;
  text:  string;
  title: string;
  index: number;
};

class Preview extends react.Component<Props, States> {

  constructor(props: any) {

    super(props);

    // Set initial state.
    this.state = {
      src:   this.props.src[0],
      alt:   this.props.alt[0],
      text:  this.props.text[0],
      title: this.props.title[0],
      index: 0
    }; 
      
    // Binding this keyword .
    this.previous = this.previous.bind(this);
    this.next     = this.next.bind(this);


  };

  // Previous.
  previous(): void {

    const previousIndex: number = this.state.index;

    if (this.state.index == 0) {

      this.setState({
        src: this.props.src[this.props.src.length - 1],
        alt: this.props.alt[this.props.src.length - 1],
        text: this.props.text[this.props.src.length - 1],
        title: this.props.title[this.props.src.length - 1],
        index: this.props.src.length - 1
      });

    } else {

      this.setState({
        src: this.props.src[previousIndex - 1],
        alt: this.props.alt[previousIndex - 1],
        text: this.props.text[previousIndex - 1],
        title: this.props.title[previousIndex - 1],
        index: previousIndex - 1
      });

    };

  };

  // Next.
  next(): void {

    const previousIndex: number = this.state.index;

    if (this.state.index == this.props.src.length - 1) {

      this.setState({
        src: this.props.src[0],
        alt: this.props.alt[0],
        text: this.props.text[0],
        title: this.props.title[0],
        index: 0
      });

    } else {

      this.setState({
        src: this.props.src[previousIndex + 1],
        alt: this.props.alt[previousIndex + 1],
        text: this.props.text[previousIndex + 1],
        title: this.props.title[previousIndex + 1],
        index: previousIndex + 1
      });

    };

  };

  render(): ReactElement {

    // States.
    const src: string  = this.state.src;
    const alt: string  = this.state.alt;
    const text: string = this.state.text;
    const title: string = this.state.title;
    const index: number = this.state.index;

    return (
    
      <div className={styles.previewContainer}>

        {/* Image */}
        <div className={styles.imageContainer}>
          <Image src={src} alt={alt} width="500" height="300"/>
        </div>

        {/* Description */}
        <div className={styles.descContainer}>

            {/* Text */}
            <div className={styles.textContainer}>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>

            {/* Controller */}
            <div className={styles.controlContainer}>
              <div className={styles.buttonContainer} onClick={() => {this.previous()}}>
                <p>Previous</p>
              </div>
              <p>Image ({index + 1}/{this.props.src.length})</p>
              <div className={styles.buttonContainer} onClick={() => {this.next()}}>
                <p>Next</p>
              </div>
            </div>

        </div>

      </div>

    );

  };

};

export default Preview;