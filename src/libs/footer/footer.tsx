/*

    ./src/libs/footer/footer.tsx

    Copyright (C) 2022, Anokidev. This file is 
    part of Anokidev's website. Anokidev's website 
    is open-source and is licensed in MIT License.

    This file is used as the footer component.

*/

// React.
import react, { ReactElement } from "react";

// SCSS.
import styles from "@styles/footer/footer.module.scss";

// Footer.
class Footer extends react.Component {

    // Render.
    render(): ReactElement {

        return (

            <div className={styles.footerContainer}>

                {/* Copyright */}
                <div className={styles.footerChildContainer}>
                    <p>
                        Copyright (C) 2022, Anokidev. All right reserved.
                        This website is <a href="https://opensource.org">open source</a>, and is licensed in an open source license that is called <a href="https://opensource.org/licenses/MIT"> MIT License</a>.
                    </p>
                </div>

                {/* Powered by... */}
                <div className={styles.footerChildContainer}>
                    <p>
                        This website is powered by: <a href="https://react.org">React</a>, <a href="https://nextjs.org">Next.js</a>, <a href="https://typescriptlang.org">Typescript</a>, <a href="https://sass-lang.com/">SCSS</a>, and <a href="https://fontawesome.com">FontAwesome</a>. Hosted on <a href="https://netlify.com">Netlify</a>. The source code is open-source and is hosted on <a href="https://github.com/anokidev/website">Github</a>.
                    </p>
                </div>

            </div>
        );

    };

};

export default Footer;