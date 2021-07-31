import { createGlobalStyle } from 'styled-components';

const Custom = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  color: #231f20;
  line-height: 1.5;
}

ul {
  list-style-type: none;
}
`;

export default Custom;
