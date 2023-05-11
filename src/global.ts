import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
  --white: #fff;
  --gray-100: #e2e8f0;

  --blue-100: #0069CA;

  --purple-100: #8C19D2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

`;
