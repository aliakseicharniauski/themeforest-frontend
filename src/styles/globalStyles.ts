import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit; /* no underline */
  }
`

export default GlobalStyles
