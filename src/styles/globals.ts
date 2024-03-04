import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-black: #1C1D22;
    --primary-gray: #EEEEEE;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Exo 2", sans-serif;;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
