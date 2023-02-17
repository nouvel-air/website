import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import P from "./P";
import SubTitle from "./SubTitle";

const Markdown = (props) => (
  <MarkdownToJSX
    options={{
      overrides: {
        p: P,
        h1: props => (<SubTitle {...props} />),
        h2: props => (<SubTitle {...props} />),
        h3: props => (<SubTitle {...props} />),
        li: props => (<li><P fontSize="18px" {...props}></P></li>)
      },
    }}
    {...props}
  />
);

export default Markdown;
