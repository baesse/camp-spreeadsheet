import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
  }

  html{
    scroll-behavior: smooth;
  }
  body,
  p {
    font-family: "Lato", sans-serif;
  }
  label {
    font-family: "Lato", sans-serif;
  }
  h2 {
    font-family: SuvinilNormal
  }
  input[type=checkbox]{
    margin: 0px 0 0;
  }
`;
