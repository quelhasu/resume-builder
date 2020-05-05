import React from 'react';
import { Remarkable } from 'remarkable';
import styled from 'styled-components';

var md = new Remarkable({
  html:     true,
  xhtmlOut: true,  
  breaks:   true,
});

const Markdown = styled.div`
  ul,ol, ul li, li ul {
    list-style: revert;
    margin: inherit;
    padding: inherit;
  }
`

const markdownRender = (source = '') => {
  return { __html: md.render(source) }
}

const MarkdownPreview = ({source="", className}) => {
  return (
    <Markdown className={className} dangerouslySetInnerHTML={markdownRender(source)}/>
  )
}

export default MarkdownPreview;