import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    background: #000 !important;
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px) !important;
    background-size: 20px 20px !important;
    background-position: 0 0 !important;
  }

  #root {
    background: #000;
  }
`;

export default GlobalStyles;
