/*

  ./src/pages/about/index.tsx

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the component for displaying code.

*/

// React.
import react, { ReactElement } from "react";

// React markdown parser.
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from "rehype-raw";

// SCSS.
import styles from "@styles/md/md.module.scss";

interface Props {
  text: string
};

// Component.
class Md extends react.Component<Props, {}> {

  render(): ReactElement {

    // Syntax highlighting, copied from the Internet.
    const syntaxHighlight: object = {

      code({ node, inline, className, children, ...props }: any) {

        const match = /language-(\w+)/.exec(className || "");
      
        return !inline && match ? (
          <SyntaxHighlighter
            style={atomDark}
            PreTag="div"
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            {...props}
          />
        ) : (
          <code className={className ? className : ""} {...props}>
            {children}
          </code>
        );

      }

    };

    // Codeblock.
    return (

      <div className={styles.codeContainer}>
        <Markdown components={syntaxHighlight} rehypePlugins={[rehypeRaw]}>{this.props.text}</Markdown>
      </div>

    );

  };

};

export default Md;