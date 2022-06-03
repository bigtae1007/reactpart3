import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding: 0;
    
  }
  a {
    text-decoration : none;
  }
  button {
    cursor: pointer;
  }
  body{
    margin-top: 80px;
  }
  :root {
    --black : #333333;
    --white: #ffffff;
    --grey : #dddddd;
    --green : #00B98D;
    --red :#F85151; 
    --blue : #0085FF;
    --dGrey : #aaa;
  }
`;

export default GlobalStyle;
