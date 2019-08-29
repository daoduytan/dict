import { createGlobalStyle } from 'styled-components';

import theme from './configs/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Playfair+Display:400,700&display=swap&subset=vietnamese');

  * {
    box-sizing: border-box
  }
  
  body {
    font-family: ${theme.font.family.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    color: ${theme.color.text};
    text-decoration: none;
  }
`;

export default GlobalStyle;
