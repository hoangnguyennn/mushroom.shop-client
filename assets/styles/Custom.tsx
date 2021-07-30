import { createGlobalStyle } from 'styled-components';

const Custom = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

ul {
  list-style-type: none;
}
`;

export default Custom;
