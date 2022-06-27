/*

  ./src/libs/under-construction/under-construction.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as a under construction warning.

*/

// React.
import react, { ReactElement } from "react";

// SCSS.
import styles from "@styles/under-construction/under-construction.module.scss";

// Page.
class UnderConstruction extends react.Component {

  // Render.
  render(): ReactElement {

    return (

      <div className={styles.underConstruction}>

        <h1>NOTE: THIS WEBSITE IS STILL UNDER CONSTRUCTION.</h1>
        <p>Projects and blogs features are not finished yet!</p>

      </div>

    )

  };

};

export default UnderConstruction;