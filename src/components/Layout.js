import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import StyledTheme from './StyledTheme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${({ theme: { background } }) => background};
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme: { link } }) => link};

    :visited {
      color: ${({ theme: { linkVisited } }) => linkVisited};
    }

    :active {
      color: ${({ theme: { linkActive } }) => linkActive};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Sans', sans-serif;
  }

  p {
    font-size: 16px;
  }

  body {
    margin: 0;
    color: ${({ theme: { foreground } }) => foreground};
  }

  code {
    font-family: 'Fira Code', monospace;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }

  @supports (font-variation-settings: normal) {
    code {
      font-family: 'Fira Code VF', monospace;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <StyledTheme>
      <>
        <Helmet>
          <title>Travis Baker | Software Engineer</title>
          <meta
            name="description"
            content="Travis Baker's personal website/portfolio. Travis is a full-stack software engineer that specializes in building complex frontend experiences."
          />
          <meta
            name="keywords"
            content="Travis, Baker, Travis Baker, Javascript, React, HTML, CSS, Plano, Texas, Dallas, Frisco, software, engineer, developer, frontend, front-end, front, end"
          />
          <meta property="og:title" content="Travis Baker's Portfolio" />
          <meta
            property="og:description"
            content="Travis Baker's personal website and portfolio."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://travisbaker.dev" />
          <meta
            property="og:image"
            content="https://travisbaker.dev/preview.png"
          />
          <meta property="og:image:width" content="1404" />
          <meta property="og:image:height" content="736" />
          <link
            rel="shortcut icon"
            href="https://travisbaker.dev/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans|Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        {children}
      </>
    </StyledTheme>
  );
}
