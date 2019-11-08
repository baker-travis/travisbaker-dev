import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  code { font-family: 'Fira Code', monospace; }

  @supports (font-variation-settings: normal) {
    code { font-family: 'Fira Code VF', monospace; }
  }
`;

export default function Layout({children}) {
  return (
    <>
      <Helmet>
        <title>Travis</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  )
}
