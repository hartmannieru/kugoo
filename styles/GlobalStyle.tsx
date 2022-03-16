import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-size: 16px;
    font-family: 'Jost', sans-serif;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    font-family: 'Jost', sans-serif;
    text-decoration: none;
  }
`
export default GlobalStyle